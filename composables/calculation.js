let salaryValue = 0
let timeValue = 0
let yearValue = ""

const result = ref({
    profit: 0,
    profitMonth: 0,
    percent: 0,
})

function setSalaryValue(value) {
    salaryValue = value
    calculateProfit()
}

function setTimeValue(value) {
    timeValue = value
    calculateResultPercent()
    calculateProfit()
}

function setYearValue(value) {
    yearValue = value
    calculateResultPercent()
    calculateProfit()
}

function calculateResultPercent() {
    console.log(yearValue, timeValue)
    if (timeValue == "Ежемесячно" && yearValue == "2 года") {
        result.value.percent = "6.20"
    } else if (timeValue == "Ежемесячно" && yearValue == "3 года") {
        result.value.percent = "6.75"
    } else if (timeValue == "В конце срока" && yearValue == "2 года") {
        result.value.percent = "6.60"
    } else if (timeValue == "В конце срока" && yearValue == "3 года") {
        result.value.percent = "7.50"
    } else {
        result.value.percent = "0"
    }
}

function calculateProfit() {
    result.value.profit =
        salaryValue * yearValue.slice(0, 1) * (result.value.percent / 100)
    result.value.profitMonth = +salaryValue + result.value.profit
}

function calculate() {
    return result
}

export function useCalculationState() {
    return {
        setSalaryValue,
        setTimeValue,
        setYearValue,
        calculate,
    }
}
