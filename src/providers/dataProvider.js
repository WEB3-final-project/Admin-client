import { fetchUtils } from 'react-admin';
import jsonServerProvider from "ra-data-json-server";
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
const baseProvider = jsonServerProvider(import.meta.env.VITE_API_URL, httpClient);

export const dataProvider = {
  getList: (resource, params) => {
    return baseProvider.getList(resource, params);
  },
  getOne: (resource, params) => {
    return baseProvider.getOne(resource, params);
  },
  getMany: (resource, params) => {
    return baseProvider.getMany(resource, params);
  },
  getManyReference: (resource, params) => {
    return baseProvider.getManyReference(resource, params);
  },
  update: (resource, params) => {
    return baseProvider.update(resource, params);
  },
  updateMany: (resource, params) => {
    return baseProvider.updateMany(resource, params);
  },
  create: (resource, params) => {
    return baseProvider.create(resource, params);
  },
  delete: (resource, params) => {
    return baseProvider.delete(resource, params);
  },
  deleteMany: (resource, params) => {
    return baseProvider.deleteMany(resource, params);
  }
};
