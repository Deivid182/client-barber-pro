<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined
  fullWidth?: boolean
  flex1?: boolean
  disabled?: boolean
  ghost?: boolean
  secondary?: boolean
  danger?: boolean
  outline?: boolean
  active?: boolean
}

defineProps<ButtonProps>()

defineEmits<{ (event: 'onClick'): void }>()
</script>
<template>
  <button
    :type="type"
    @click="$emit('onClick')"
    class="flex items-center gap-2 justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    :class="[
      flex1 && 'max-lg:w-full',
      fullWidth && 'w-full',
      ghost && 'bg-transparent text-white hover:bg-neutral-100/90 hover:text-neutral-900',
      secondary && 'bg-neutral-400 text-neutral-900',
      outline && 'bg-white text-sky-600',
      active && 'bg-sky-600 text-white',
      danger && 'bg-rose-500 text-white hover:bg-rose-600 focus-visible:outline-rose-500',
      disabled && 'opacity-50 cursor-not-allowed',
      !secondary &&
        !danger &&
        !outline &&
        !ghost &&
        'bg-sky-500 text-white hover:bg-sky-600 focus-visible:outline-sky-600'
    ]"
  >
    <slot />
  </button>
</template>
