<template>
  <div v-if="name" class="py-4 cursor-pointer text-grayshadow50">
    <div class="font-medium">
      {{ name }}
    </div>
    <div class="mt-3 flex items-center justify-between text-sm">
      <div>
        <div>{{ address }}</div>
        <div>{{ city }}, {{ state }} {{ zip }}</div>
        <div>{{ country }}</div>
      </div>
      <div>{{ id }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  id: String,
  name: String,
  address: String,
  city: String,
  zip: String,
  state: String,
  country: String,
});
</script>
