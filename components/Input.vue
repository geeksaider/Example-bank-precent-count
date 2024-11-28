<script setup lang="ts">
const style =
  "absolute text-background peer-focus:text-xs text-xs bg-white peer-focus:bg-white peer-focus:px-1 px-1\
    peer-focus:transition-all pointer-events-none peer-focus:-top-2 -top-2 \
    peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-lg \
    peer-placeholder-shown:top-1.5 peer-focus:left-2 left-2";

const inputValue = defineModel();

const {
  type = "text",
  placeholder = "Ввод",
  warn,
  star = "*",
  styleSpan,
  styleInput,
} = defineProps([
  "type",
  "placeholder",
  "styleSpan",
  "styleInput",
  "warn",
  "star",
]);
</script>
<template>
  <div class="flex flex-col relative">
    <input
      :type="type"
      :class="styleInput"
      placeholder=" "
      v-model="inputValue"
    />
    <span :class="style"
      >{{ placeholder }}<span class="text-red-800">{{ star }}</span></span
    >
    <span :class="styleSpan">{{ warn }}</span>
  </div>
</template>
