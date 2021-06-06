<template>
  <div
    v-if="selected"
    class="p-4 shadow mt-3 flex items-center justify-between text-sm"
  >
    <div class="text-grayshadow50">
      <div class="font-medium mb-2">
        {{ selected.name }}
      </div>
      <div>
        <div>{{ selected.address_line1 }}</div>
        <div>
          {{ selected.address_city }}, {{ selected.address_state }}
          {{ selected.address_zip }}
        </div>
        <div>{{ selected.address_country }}</div>
      </div>
    </div>

    <div class="cursor-pointer w-4">
      <img src="../assets/remove.svg" class="h-4" @click="$emit('remove')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmit } from "vue";

defineProps({
  selected: Object,
});

defineEmit(["remove"]);
</script>
