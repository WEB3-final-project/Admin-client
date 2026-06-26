const API_URL = import.meta.env.VITE_API_URL;

const getToken = () => localStorage.getItem('access_token');

const fetchWithAuth = async (url, options = {}) => {
    const token = getToken();
    const response = await fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
            ...options.headers,
        },
        credentials: 'include',
    });
    return response;
};

const normalizeList = async (response) => {
    if (response.status === 404) return { data: [], total: 0 };
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw { status: response.status, message: err.message || 'Request failed' };
    }
    const json = await response.json();
    const data = Array.isArray(json) ? json : [];
    const total = parseInt(response.headers.get('X-Total-Count'), 10) || data.length;
    return { data, total };
};

const normalizeOne = async (response) => {
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw { status: response.status, message: err.message || 'Request failed' };
    }
    const json = await response.json();
    const data = json.speaker || json;
    return { data };
};

export const dataProvider = {
    getList: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = new URLSearchParams({
            _sort: field,
            _order: order,
            _start: String((page - 1) * perPage),
            _end: String(page * perPage),
        });
        Object.entries(params.filter || {}).forEach(([key, value]) => {
            query.append(key, value);
        });
        const response = await fetchWithAuth(`${API_URL}/${resource}?${query}`);
        return normalizeList(response);
    },

    getOne: async (resource, params) => {
        const response = await fetchWithAuth(`${API_URL}/${resource}/${params.id}`);
        return normalizeOne(response);
    },

    getMany: async (resource, params) => {
        const results = await Promise.all(
            params.ids.map(id => fetchWithAuth(`${API_URL}/${resource}/${id}`))
        );
        const data = await Promise.all(
            results.map(async (r) => {
                const json = await r.json();
                return json.speaker || json;
            })
        );
        return { data };
    },

    getManyReference: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = new URLSearchParams({
            [params.target]: params.id,
            _sort: field,
            _order: order,
            _start: String((page - 1) * perPage),
            _end: String(page * perPage),
        });
        const response = await fetchWithAuth(`${API_URL}/${resource}?${query}`);
        return normalizeList(response);
    },

    create: async (resource, params) => {
        const response = await fetchWithAuth(`${API_URL}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        });
        return normalizeOne(response);
    },

    update: async (resource, params) => {
        const response = await fetchWithAuth(`${API_URL}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        });
        return normalizeOne(response);
    },

    updateMany: async (resource, params) => {
        await Promise.all(
            params.ids.map(id =>
                fetchWithAuth(`${API_URL}/${resource}/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify(params.data),
                })
            )
        );
        return { data: params.ids };
    },

    delete: async (resource, params) => {
        await fetchWithAuth(`${API_URL}/${resource}/${params.id}`, {
            method: 'DELETE',
        });
        return { data: params.previousData };
    },

    deleteMany: async (resource, params) => {
        await Promise.all(
            params.ids.map(id =>
                fetchWithAuth(`${API_URL}/${resource}/${id}`, { method: 'DELETE' })
            )
        );
        return { data: params.ids };
    },
};