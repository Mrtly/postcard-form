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
        :address="result.address_line1"
        :city="result.address_city"
        :zip="result.address_zip"
        :state="result.address_state"
        :country="result.address_country"
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
  address_line1: String;
  address_city: String;
  address_zip: String;
  address_state: String;
  address_country: String;
}

defineProps({
  results: { type: Array as PropType<AddressResult[]> },
});

const emit = defineEmit(["addressSelected"]);

function selectedAddress(id: String) {
  emit("addressSelected", id);
}
</script>
