import { getServices } from '@/services/services-api';
import type { Service } from '@/types/types';
import { defineStore } from 'pinia';
import { onMounted, ref } from 'vue';

export const useServices = defineStore('services', () => {

  const services = ref<Service[]>([])

  onMounted(async () => {
    try {
      const { data } = await getServices()
      services.value = data
      console.log(services.value);
    } catch (error) {
      console.log(error);
    }
  })

  return {
    services
  }
})