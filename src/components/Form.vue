<template>
  <form @submit.prevent="submitForm" class="max-w-md mx-auto">
    <InputField
      v-model="formData.description"
      label="Description"
      placeholder="Describe the mail"
      class="mt-5"
    />
    <InputField
      v-model="formData.to"
      search
      label="To"
      placeholder="Recipient Name"
      class="mt-5"
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
import { reactive, watch } from "vue";

const formData = reactive({
  description: null as string | null,
  to: null as string | null,
  from: null as string | null,
  front: null as string | null,
  back: null as string | null,
});

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
