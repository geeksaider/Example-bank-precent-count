<script setup>
const model = defineModel({ default: 10000 });
</script>
<template>
  <div class="relative flex items-center flex-col" @input="">
    <input
      type="number"
      class="border-2 border-gray rounded-md py-1 h-10 w-full px-2 appearance-none"
      v-model="model"
    />
    <input
      type="range"
      min="10000"
      max="10000000"
      v-model="model"
      class="absolute accent-primary top-10 w-[97%] appearance-none cursor-pointer bg-primary rounded-lg h-1"
    />
  </div>
</template>
