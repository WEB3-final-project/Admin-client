import jsonServerProvider from 'ra-data-json-server';
import { fetchUtils } from 'react-admin';

const API_URL = import.meta.env.VITE_API_URL;

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('access_token');
    if (token) {
        options.headers.set('Authorization', `Bearer ${token}`);
    }
    options.credentials = 'include';
    return fetchUtils.fetchJson(url, options);
};

const baseDataProvider = jsonServerProvider(API_URL, httpClient);

export const dataProvider = {
  ...baseDataProvider,

  getList: async (resource, params) => {
    const url = `${API_URL}/${resource}`;
    const { json } = await httpClient(url);
    return {
      data: json,
      total: json.length,
    };
  },

  create: async (resource, params) => {
    const url = `${API_URL}/${resource}`;
    const { json } = await httpClient(url, {
      method: 'POST',
      body: JSON.stringify(params.data),
    });
    const data = json.speaker || json.event || json.session || json.room || json;
    return { data };
  },

  update: async (resource, params) => {
    const url = `${API_URL}/${resource}/${params.id}`;
    const { json } = await httpClient(url, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    });
    const data = json.speaker || json.event || json.session || json.room || json;
    return { data };
  },

  delete: async (resource, params) => {
    const url = `${API_URL}/${resource}/${params.id}`;
    const { json } = await httpClient(url, {
      method: 'DELETE',
    });
    const data = json.speaker || json.event || json.session || json.room || json;
    return { data: { id: params.id, ...data } };
  },
};