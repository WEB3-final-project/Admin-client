import { fetchUtils } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const API_URL = import.meta.env.VITE_API_URL;

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({
            Accept: "application/json",
        });
    }

    const token = localStorage.getItem("access_token");

    if (token) {
        options.headers.set(
            "Authorization",
            `Bearer ${token}`
        );
    }

    options.credentials = "include";

    return fetchUtils.fetchJson(url, options);
};

const baseProvider = jsonServerProvider(
    API_URL,
    httpClient
);

const simpleGetList = async (resource) => {
    const { json } = await httpClient(
        `${API_URL}/${resource}`
    );

    return {
        data: json,
        total: json.length,
    };
};

export const dataProvider = {
    ...baseProvider,

    getList: (resource, params) => {
        if (resource === "audit-logs") {
            return baseProvider.getList(resource, params);
        }

        return simpleGetList(resource, params);
    },
};