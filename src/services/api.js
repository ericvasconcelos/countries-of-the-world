import axios from 'axios';

const config = {
  crossDomain: true,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
};

config.baseURL = 'https://restcountries.eu/rest';

const api = axios.create(config);

api.CancelToken = axios.CancelToken;
api.isCancel = axios.isCancel;

export default api;
