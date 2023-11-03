import type { Service } from '@/types/types';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useReservations = defineStore('reservations', () => {
  
  const selectedItems = ref<Service[]>([])

  const date = ref('')

  //TODO: limit to 2 services per reservation
  const toggleReservation = (service: Service) => {
    if (!isServiceSelected.value(service._id)) {
      selectedItems.value.push(service)
    } else {
      selectedItems.value = selectedItems.value.filter(item => item._id !== service._id)
    }
  }

  const isServiceSelected = computed(() => {
    return (id: string) => selectedItems.value.some(item => item._id === id)
  })

  const total = computed(() => {
    return selectedItems.value.reduce((acc, item) => acc + item.price, 0)
  })

  return {
    date,
    toggleReservation,
    selectedItems,
    isServiceSelected,
    total
  }
})