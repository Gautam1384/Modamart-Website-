// src/api/axiosConfig.js
import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // change as needed, e.g. http://localhost:8080/api
  timeout: 15000,
});

// Attach token automatically if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('sellerToken') || localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;