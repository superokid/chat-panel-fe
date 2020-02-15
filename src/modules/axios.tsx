import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: `${process.env.REACT_APP_ORIGIN}/messager/api`,
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PUT, PATCH, DELETE',
    'Content-Type': 'application/json'
    // Accept: 'application/json'
    // 'Access-Control-Allow-Headers':
    //   'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin'
  },
  timeout: 60000
};

const instance = axios.create(config);

export default instance;
