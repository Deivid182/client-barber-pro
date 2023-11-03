<script setup lang="ts">
import { useServices } from '@/stores/services';
import Heading from '../components/heading.vue';
import ServiceItem from '../components/service-item.vue';

const services = useServices();

</script>
<template>
  <Heading title="Services" description="Choose at least one service to continue" />
  <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
    <ServiceItem
      v-for="service in services.services"
      :key="service._id"
      :service="service"
    />
  </div>

</template>
