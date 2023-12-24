<script lang="ts" setup>
import { RouterView } from 'vue-router';

const authRoutes = [
  {name: 'register', text: 'Sign up'},
  {name: 'login', text: 'Sign in'},
]

</script>

<template>
  <div class="mt-20 lg:w-4/5 mx-auto">

    <RouterView />
    <div class="mt-10 flex flex-col items-center space-y-5 lg:flex-row lg:justify-between lg:space-y-0">
      <RouterLink
        v-for="route in authRoutes"
        class="font-bold text-white"
        :to="route.name"
        :key="route.name"
      >
        {{ route.text }}
      </RouterLink>
    </div>
  </div>
</template>