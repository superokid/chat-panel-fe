import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'http://localhost:8000',
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PUT, PATCH, DELETE',
    'Content-Type': 'application/json'
    // Accept: 'application/json'
    // 'Access-Control-Allow-Headers':
    //   'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin'
  },
  timeout: 120000
};

const instance = axios.create(config);

export default instance;
