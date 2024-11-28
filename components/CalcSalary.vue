<script setup>
const salaryValue = ref(0)
const { setSalaryValue, setTimeValue, setYearValue } = useCalculationState()
const selectButtonTime = ref("Ежемесячно")
const selectedButtonYear = ref("2 года")

watch([salaryValue, selectButtonTime, selectedButtonYear], () => {
    setSalaryValue(salaryValue.value)
    setTimeValue(selectButtonTime.value)
    setYearValue(selectedButtonYear.value)
})
</script>

<template>
    <div class="max-w-[700px] flex gap-5 flex-col">
        <h1 class="font-bold text-2xl">Расчет доходности по кредиту</h1>
        <div>
            <span class="text-sm text-stone-600">Сумма вклада</span>
            <InputSlider v-model="salaryValue" />
        </div>
        <div class="flex justify-between">
            <div class="flex flex-col gap-2" id="percent">
                <span class="text-sm text-stone-600">Выплата процентов</span>
                <ToggleList
                    :list="['Ежемесячно', 'В конце срока']"
                    v-model="selectButtonTime"
                />
            </div>
            <div class="flex flex-col gap-2" id="term">
                <span class="text-sm text-stone-600">Срок вклада</span>
                <ToggleList
                    :list="['2 года', '3 года']"
                    v-model="selectedButtonYear"
                />
            </div>
        </div>
        <div>
            <p>
                *Расчет по вкладу является предварительным при условии открытия
                вклада онлайн
            </p>
            <a
                href=""
                class="text-green-500 underline decoration-green-500 text-sm"
            >
                Подробные условия</a
            >
        </div>
    </div>
</template>
