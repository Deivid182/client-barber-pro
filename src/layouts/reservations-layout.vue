<script setup lang="ts">
import { RouterView } from 'vue-router';
import Button from '../components/button.vue';
import Link from '../components/link.vue';
</script>

<template>
  <div class="flex justify-between items-start">
    <h1 class="text-2xl lg:text-6xl font-black text-white">BarberPro</h1>
    <div class="flex flex-col gap-5">
      <div class="flex items-center justify-end gap-2">
        <p class="text-white">Hi there</p>
        <Button type="button" @onClick="() => {}" danger :disabled="false"> Logout </Button>
      </div>
      <nav class="flex gap-2 items-center">
        <Button type="button" @onClick="() => {}" ghost> My Reservations </Button>
        <Link
          to="new"
          primary
        >
          New Reservation
        </Link>
      </nav>
    </div>
  </div>
  <main>
    <RouterView />
  </main>
</template>
