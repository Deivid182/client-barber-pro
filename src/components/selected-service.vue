<script setup lang="ts">
import { formatPrice } from '@/helpers';
import { useReservations } from '@/stores/reservations';
import type { Service } from '@/types/types';
import Button from '../components/button.vue';

defineProps<{
  service: Service
}>()

const reservations = useReservations();

</script>

<template>
  <div class="p-4 rounded-lg border border-gray-500 flex justify-between items-center">
    <div>
      <p class="text-2xl font-extrabold text-white">
        {{ service.name }}
      </p>
      <p class="text-4xl font-black text-blue-500">
        {{ formatPrice(service.price) }}
      </p>
    </div>
    <Button 
      type="button" @onClick="reservations.toggleReservation(service)" danger> Remove </Button>
  </div>
</template>
