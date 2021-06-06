<template>
  <div class="relative">
    <div v-if="label" class="mb-3 text-lg">{{ label }}:</div>
    <input
      spellcheck="false"
      :placeholder="placeholder"
      :value="modelValue"
      :class="[
        'w-full h-12 pl-2 bg-white shadow-md border-none rounded-md',
        'focus:outline-none focus:ring-0 focus:shadow-lg',
      ]"
      @input="updateValue"
    />
    <img
      v-if="search"
      src="../assets/search.svg"
      class="h-6 absolute right-3 bottom-3"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmit } from "vue";

defineProps({
  modelValue: { type: String, default: null },
  label: { type: String, default: null },
  placeholder: { type: String, default: null },
  search: Boolean,
});

const emit = defineEmit(["update:modelValue"]);

function updateValue(event: Event) {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
}
</script>
