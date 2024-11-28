<script setup>
const { list } = defineProps(["list"])

const selectedButton = defineModel()

function selectButton(what) {
    selectedButton.value = what
}
</script>

<template>
    <div class="flex gap-2">
        <button
            v-for="el in list"
            class="border-2 border-gray rounded-md px-5 py-1"
            :class="{
                'bg-green-50 border-primary text-green-700 ':
                    selectedButton == el,
            }"
            @click="() => selectButton(el)"
        >
            {{ el }}
        </button>
    </div>
</template>
