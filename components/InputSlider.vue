<script setup>
const model = defineModel({ default: 0 });
</script>
<template>
    <div class="relative flex flex-col" @input="">
        <input
            type="number"
            class="border-2 border-gray rounded-md py-1 px-2 appearance-none"
            v-model="model"
        />
    </div>
</template>
