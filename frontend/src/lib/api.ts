import axios from 'axios'

const apiUrl = window._env_.API_URL;

const api = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;