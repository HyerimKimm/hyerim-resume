import axios, { Axios } from 'axios';

const DOMAIN = process.env.REACT_APP_DOMAIN;
const PORT = process.env.REACT_APP_PORT;

export const ROOT_URL = `${DOMAIN}:${PORT}`;

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
