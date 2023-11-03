<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';


interface LinkProps {
  to: string
  fullWidth?: boolean
  secondary?: boolean
  isBig?: boolean
  primary?: boolean
}

defineProps<LinkProps>()
const route = useRoute();

console.log(route.name);

</script>
<template>
  <RouterLink
    :to="{name: to}"
    :class="[
      fullWidth ? 'flex-1' : '',
      primary ? 'bg-green-500 text-white' : '',
      isBig ? 'p-4 text-xl' : 'p-2 text-sm',
      route.name === to && secondary ? 'bg-sky-600 text-white' : 'text-blue-500 bg-white hover:text-white hover:bg-blue-500',
    ]"
    class="focus-visible:outline-sky-600 text-center transition-all duration-200 p-2 rounded-md"
  >
    <slot />
  </RouterLink>
</template>