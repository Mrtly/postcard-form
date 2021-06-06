<template>
  <button
    :class="[
      'text-white bg-cerulean flex items-center justify-center',
      'rounded-lg px-5 py-3 cursor-pointer',
      ' focus:outline-none focus:shadow-button hover:bg-cobalt',
      'transition-all ease-in-out duration-300',
    ]"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
  label: String,
});
</script>
