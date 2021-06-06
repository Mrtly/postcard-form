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
let selectedToAddress = ref(null);

function selectThisAddress(id: string) {
  //@ts-ignore (possibly null)
  selectedToAddress.value = searchResults.value.find((r: Object) => r.id == id);
}

function removeSelectedToAddress() {
  selectedToAddress.value = null;
  searchResults.value = null;
  formData.to = null;
}

//fetch search results
async function searchAddressTo(query: string) {
  let url = `https://api.lob.com/v1/search/?types=addresses&q=${query}`;
  let username = "test_8ddaad35dc02260ae8a4e6e33d9f3ade7ae";
  let password = "";
  try {
    await fetch(url, {
      headers: {
        Authorization: "Basic " + btoa(`${username}:${password}`),
      },
    })
      .then((response) => response.json())
      .then((data) => (searchResults.value = data.data));
  } catch (e) {
    console.log(e);
    throw e;
  }
}

watch(
  () => formData.to,
  () => {
    searchAddressTo(formData?.to!);
  }
);

function submitForm() {
  console.log(formData);
}
</script>
