<script setup>
const { calculate } = useCalculationState();
const result = calculate();
console.log(result);
</script>
<template>
    <div class="bg-stone-100 rounded-xl flex flex-col gap-5 py-5 px-10">
        <div>
            <span class="text-sm text-stone-600">Процентная ставка</span>
            <p class="text-2xl">
                {{ result.percent.toString().replace(".", ",") }}%
            </p>
        </div>
        <div>
            <span class="text-sm text-stone-600">Доход</span>
            <p class="text-2xl">
                {{ new Intl.NumberFormat("ru-RU").format(result.profit) }}
                рублей
            </p>
        </div>
        <div>
            <span class="text-sm text-stone-600">Сумма в конче срока*</span>
            <p class="text-2xl">
                {{ new Intl.NumberFormat("ru-RU").format(result.profitMonth) }}
                рублей
            </p>
        </div>
        <Button> Оставить заявку</Button>
    </div>
</template>
