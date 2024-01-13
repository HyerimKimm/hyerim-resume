import axios, { Axios } from 'axios';
import { PROD_URL, DEV_URL, PORT } from '../constants/constants';

export const ROOT_URL = `${PROD_URL}:${PORT}`;

export const hyerimHttp: Axios = axios.create({
  baseURL: ROOT_URL,
  responseType: 'json',
});

hyerimHttp.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

hyerimHttp.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
