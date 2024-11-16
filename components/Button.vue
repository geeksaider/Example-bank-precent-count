<script setup></script>

<template>
    <div class="flex">
        <button
            class="rounded-md text-sm py-2 px-10 font-semibold bg-second text-black"
            :class="style"
        >
            <slot></slot>
        </button>
    </div>
</template>
