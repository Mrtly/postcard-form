<template>
  <div
    v-if="results != null"
    class="
      text-graysteel
      absolute
      shadow
      max-w-md
      w-full
      py-2
      px-5
      bg-white
      z-20
      mt-4
    "
  >
    <div
      v-for="(result, index) in results"
      :key="index"
      :class="{
        'border-t border-grayfog': index != 0,
      }"
    >
      <ResultAddressTile
        :id="result.id"
        :name="result.name"
        :addressLine1="result.addressLine1"
        :city="result.city"
        :zip="result.zip"
        :state="result.state"
        :country="result.country"
        @click="selectedAddress(result.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmit } from "vue";
import type { PropType } from "vue";

interface AddressResult {
  id: String;
  name: String;
  addressLine1: String;
  city: String;
  zip: String;
  state: String;
  country: String;
}

defineProps({
  results: { type: Array as PropType<AddressResult[]> },
});

const emit = defineEmit(["addressSelected"]);

function selectedAddress(id: String) {
  emit("addressSelected", id);
}
</script>
