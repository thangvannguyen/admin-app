// api/axiosClient.js
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://192.168.1.125:8080/api',
  headers: {
    'content-type': 'application/json',
  },
});

export default axiosClient;
