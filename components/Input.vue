<script lang="ts">
const {
    type = "text",
    placeholder = "Ввод",
    warn,
} = defineProps(["type", "placeholder", "warn"]);
</script>
<template>
    <div class="flex flex-col">
        <input :type="type" :placeholder="placeholder" class="w-full" />
        <span class="text-red text-sm">{{ warn }}</span>
    </div>
</template>
