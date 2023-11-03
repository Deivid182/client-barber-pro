<script setup lang="ts">
import { formatPrice } from '@/helpers'
import { useReservations } from '@/stores/reservations'
import { ref } from 'vue'
import VueTailwindDatepicker from 'vue-tailwind-datepicker'
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
      <div class="lg:flex gap-5">
        <div class="w-full lg:w-auto bg-white flex justify-center rounded-lg">
          <VueTailwindDatepicker 
            as-single 
            no-input 
            :formatter="formatter"
            v-model="reservations.date"
          />
        </div>
      </div>
    </div>
  </div>
  <p v-else class="text-white text-xl">No services selected</p>
</template>
