import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: `${process.env.REACT_APP_ORIGIN}/api`,
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

// set header on reload
(function setDefaultHeader() {
  try {
    const root = localStorage.getItem('persist:root');
    if (root) {
      const jsonRoot = JSON.parse(root);
      const jsonAuth = JSON.parse(jsonRoot?.auth);

      instance.defaults.headers.Authorization = `Bearer ${jsonAuth?.auth?.token}`;
    }
  } catch (err) {
    console.log('get localstorage token failed');
  }
})();

export default instance;
