import api from '@/lib/api';
import type { RegisterData, RegisterResponse } from '@/types/types';
import type { AxiosError } from 'axios';

export default {
  register: async (values: RegisterData): Promise<RegisterResponse> => {
    try {
      const { data } = await api.post('/users', values);
      return Promise.resolve(data)
    } catch (error) {
      const e = (error as AxiosError)
      console.log('Error' + e.response?.data);
      const apiError: RegisterResponse = JSON.parse(JSON.stringify(e.response?.data))
      return Promise.resolve(apiError)
    }
  }
}