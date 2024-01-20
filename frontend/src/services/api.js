// frontend/src/services/api.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

const api = axios.create({
    baseURL: API_BASE_URL,
});

const ApiService = {
    getContributions: async (username) => {
        try {
            const response = await api.get(`/api/contributions/${username}`);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
};

export default ApiService;
