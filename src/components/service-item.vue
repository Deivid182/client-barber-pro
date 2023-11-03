<script setup lang="ts">
import { useReservations } from '@/stores/reservations';
import type { Service } from '@/types/types';
import { formatPrice } from '../helpers';
interface Props {
  service: Service
}

const reservations = useReservations();

defineProps<Props>();

</script>

<template>
  <div 
    :class="
      reservations.isServiceSelected(service._id) ? 'bg-blue-500 text-white' : 'bg-white'
    "
    @click="reservations.toggleReservation(service)"
    class="p-4 space-y-5 rounded-lg cursor-pointer">
    <h5 class="font-bold text-2xl">
      {{ service.name }}
    </h5>
    <p 
      :class="reservations.isServiceSelected(service._id) ? 'text-white' : 'text-blue-500'"
      class="text-4xl font-black text-blue-500">
      {{ formatPrice(service.price) }}
    </p>
  </div>
</template>
