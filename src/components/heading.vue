<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
interface Props {
  title: string
  description: string
}

defineProps<Props>()

</script>

<template>
  <div class="space-y-5">
    <h2 class="text-4xl font-extrabold text-white">
      {{ title }}
    </h2>
    <p class="text-white text-lg">
      {{ description }}
    </p>
  </div>
</template>

