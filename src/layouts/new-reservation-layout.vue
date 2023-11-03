<script setup lang="ts">
import { RouterView } from 'vue-router';
import Link from '../components/link.vue';
</script>

<template>
  <nav class="flex gap-5 my-5">
    <Link
      fullWidth
      secondary
      isBig
      to="new"> Services </Link>
      <Link
      fullWidth
      secondary
      isBig
      to="details"> Summary </Link>
  </nav>
  <main class="space-y-5">
    <RouterView />
  </main>
</template>
