<script setup>
const styleSpanFirst = ref("")
const styleInputFirst = ref("")
const styleSpanSecond = ref("")
const styleInputSecond = ref("")
const styleSpanThird = ref("")
const styleInputThird = ref("")
const styleSpanFourth = ref("")
const styleInputFourth = ref("")
const stylePhone = ref("")
const styleSpanPhone = ref("")

const firstInput = ref("")
const secondInput = ref("")
const thirdInput = ref("")
const fourthInput = ref("")
const telephone = ref("")
const check = ref("")

const normalStyle =
    "peer py-2 px-4 outline rounded-lg outline-background outline-1 w-full"
const warnStyle =
    "peer py-2 px-4 outline rounded-lg outline-red-700 outline-1 w-full"
const normalSpan = "hidden"
const warnSpan = "text-xs text-red-700"

styleSpanFirst.value =
    styleSpanSecond.value =
    styleSpanThird.value =
    styleSpanFourth.value =
    styleSpanPhone.value =
        normalSpan
styleInputFirst.value =
    styleInputSecond.value =
    styleInputThird.value =
    styleInputFourth.value =
    stylePhone.value =
        normalStyle

function updateStyle() {
    if (firstInput.value == "") {
        styleSpanFirst.value = warnSpan
        styleInputFirst.value = warnStyle
    } else {
        styleSpanFirst.value = normalSpan
        styleInputFirst.value = normalStyle
    }
    if (secondInput.value == "") {
        styleSpanSecond.value = warnSpan
        styleInputSecond.value = warnStyle
    } else {
        styleSpanSecond.value = normalSpan
        styleInputSecond.value = normalStyle
    }
    if (thirdInput.value == "") {
        styleSpanThird.value = warnSpan
        styleInputThird.value = warnStyle
    } else {
        styleSpanThird.value = normalSpan
        styleInputThird.value = normalStyle
    }
    if (fourthInput.value == "") {
        styleSpanFourth.value = warnSpan
        styleInputFourth.value = warnStyle
    } else {
        styleSpanFourth.value = normalSpan
        styleInputFourth.value = normalStyle
    }
    if (
        telephone.value == "" ||
        telephone.value == "+7 (" ||
        telephone.value.length <= 17
    ) {
        styleSpanPhone.value = warnSpan
        stylePhone.value = warnStyle
    } else {
        styleSpanPhone.value = normalSpan
        stylePhone.value = normalStyle
    }
}
</script>
<template>
    <div
        class="bg-white px-8 my-10 py-6 rounded-xl flex flex-col gap-8 h-fit w-[650px]"
    >
        <h1 class="font-semibold text-2xl">Заявка на открытие вклада</h1>
        <Input
            :type="'text'"
            :placeholder="'Фамилия'"
            :warn="'Поле необходимо заполнить'"
            :styleSpan="styleSpanFirst"
            :styleInput="styleInputFirst"
            v-model="firstInput"
        />
        <Input
            :type="'text'"
            :placeholder="'Имя'"
            :warn="'Поле необходимо заполнить'"
            :styleSpan="styleSpanSecond"
            :styleInput="styleInputSecond"
            v-model="secondInput"
        />
        <Input
            :type="'text'"
            :placeholder="'Отчество'"
            :warn="'Поле необходимо заполнить'"
            :styleSpan="styleSpanThird"
            :styleInput="styleInputThird"
            v-model="thirdInput"
        />
        <Input
            :type="'date'"
            :placeholder="'Дата рожднеия'"
            :warn="'Поле необходимо заполнить'"
            :styleSpan="styleSpanFourth"
            :styleInput="styleInputFourth"
            v-model="fourthInput"
        />
        <InputPhone
            :styleSpanPhone="styleSpanPhone"
            :stylePhone="stylePhone"
            :warn="'Поле необходимо заполнить'"
            v-model="telephone"
        />
        <Checkbox />
        <Button v-model="check" @click="updateStyle()">Оствить заявку</Button>
    </div>
</template>
