// @eslint-ignore
import { Api, ApiConfig } from './api-requests';

export interface ErrorResponse {
  code: number;
  message: string;
}

const BASE_API_URL = '/api';

const API_CONFIG: ApiConfig = {
  baseURL: BASE_API_URL,
};

const API_CONFIG_SECURE: ApiConfig = {
  baseURL: BASE_API_URL,
  securityWorker: async () => {
    const token = localStorage.getItem('symida-token');

    if (token) {
      return { headers: { Authorization: `Bearer ${token ?? ''}` } };
    }
  },
};

export const ApiClient = new Api(API_CONFIG);

export const ApiClientSecured = new Api(API_CONFIG_SECURE);
