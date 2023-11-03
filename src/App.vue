<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="grid grid-cols-3 h-screen max-md:grid-rows-[auto,1fr]">
    <div class="col-span-3 md:col-span-1 h-32 md:h-auto bg-app-bg bg-center bg-cover" />
    <div class="col-span-3 md:col-span-2 bg-slate-800 p-4 overflow-y-auto">
      <RouterView />
    </div>
  </div>
</template>