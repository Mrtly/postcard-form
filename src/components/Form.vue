<template>
  <form @submit.prevent="submitForm" class="max-w-md mx-auto">
    <InputField
      v-model="formData.description"
      label="Description"
      placeholder="Describe the mail"
      class="mt-5"
    />
    <InputField
      v-if="!selectedToAddress"
      v-model="formData.to"
      search
      label="To"
      placeholder="Recipient Name"
      class="mt-5"
    />
    <SelectedAddressTile
      v-if="selectedToAddress != null"
      :selected="selectedToAddress"
      class="mt-5"
      @remove="removeSelectedToAddress"
    />
    <AddressSearchDropdown
      v-if="searchResults && !selectedToAddress"
      :results="searchResults"
      @addressSelected="selectThisAddress($event)"
    />
    <InputField
      search
      v-model="formData.from"
      label="From"
      placeholder="Describe"
      class="mt-5"
    />
    <InputField
      v-model="formData.front"
      label="Front"
      placeholder="link"
      class="mt-5"
    />
    <InputField
      v-model="formData.back"
      label="Back"
      placeholder="link"
      class="mt-5"
    />
    <DesktopButton label="Submit" class="mt-10" />
  </form>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";

const formData = reactive({
  description: null as string | null,
  to: null as string | null,
  from: null as string | null,
  front: null as string | null,
  back: null as string | null,
});

let searchResults = ref(null);

//@ts-ignore
// searchResults.value = [
//   {
//     id: "adr_a2d46a94a70edfa9",
//     name: "BRETT VARGAS",
//     addressLine1: "70 FLANTY TERR",
//     city: "MINNEAPOLIS",
//     zip: "55401",
//     state: "MN",
//     country: "UNITED STATES",
//   },
// ];

let selectedToAddress = ref(null);

function selectThisAddress(id: string) {
  console.log("id is " + id);
  //@ts-ignore (possibly null)
  selectedToAddress.value = searchResults.value.find((r: Object) => r.id == id);
}

function removeSelectedToAddress() {
  selectedToAddress.value = null;
}

function submitForm() {
  console.log(formData);
}

watch(
  () => formData.to,
  () => {
    //this will call the search
    console.log(formData.to);
  }
);
</script>
