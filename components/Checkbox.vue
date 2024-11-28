<script setup>
const check = defineModel();
</script>
<template>
  <div class="flex relative items-center gap-4">
    <input
      type="checkbox"
      checked
      class="peer border rounded-md appearance-none cursor-pointer checked:bg-primary size-6 ml-1"
      v-model="check"
    /><span
      class="absolute text-white opacity-0 peer-checked:opacity-100 top-1.5 left-2 pointer-events-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-3.5 w-3.5"
        viewBox="0 0 20 20"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="1"
      >
        <path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </span>
    <span
      >Я подтверждаю согласие на обработку
      <a
        href="https://gist.github.com/Maxim-Kolmogorov/d867767c976532fea60ee4a1abd725e7"
        class="text-primary"
        >персональных данных</a
      ></span
    >
  </div>
</template>
