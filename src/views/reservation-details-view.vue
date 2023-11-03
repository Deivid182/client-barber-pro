<script setup lang="ts">
import { formatPrice } from '@/helpers'
import { useReservations } from '@/stores/reservations'
import { ref } from 'vue'
import VueTailwindDatepicker from 'vue-tailwind-datepicker'
import Button from '../components/button.vue'
import Heading from '../components/heading.vue'
import SelectedService from '../components/selected-service.vue'

const reservations = useReservations()

const formatter = ref({
  date: 'DD/MM/YYYY',
})

</script>
<template>
  <Heading title="Summary" description="Make sure everything is correct" />

  <h3 class="text-2xl text-white font-semibold">Selected services</h3>

  <div v-if="reservations.selectedItems.length > 0" class="grid gap-5">
    <SelectedService
      v-for="service in reservations.selectedItems"
      :key="service._id"
      :service="service"
    />

    <p class="text-white text-xl text-right">
      Total:
      <span class="text-2xl font-extrabold">
        {{ formatPrice(reservations.total) }}
      </span>
    </p>
    <div class="space-y-6">
      <h3 class="text-3xl text-white font-semibold">Date and time</h3>
      <div class="max-sm:flex-col flex lg:items-center  gap-5">
        <div class="lg:w-auto bg-white flex justify-center rounded-lg">
          <VueTailwindDatepicker 
            as-single 
            no-input
            :formatter="formatter"
            v-model="reservations.date"
          />
        </div>
        <div class="flex-1 flex flex-col flex-wrap lg:flex-row gap-4">
          <button
            v-for="hour in reservations.hours"
            :key="hour"
            class="max-sm:flex-1 rounded-lg p-2 text-center"
            @click="reservations.time = hour"
            :class="reservations.time === hour ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'"
          >
            {{ hour }}
          </button>
        </div>
      </div>

    </div>
  </div>
  <p v-else class="text-white text-xl">No services selected</p>
</template>
