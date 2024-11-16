let salaryValue = 0;
let timeValue = 0;
let yearValue = 0;

const result = ref({
    profit: 0,
    profitMonth: 0,
    percent: 0,
});

function setSalaryValue(value) {
    rewriteYear();
    calculateProfit();
    salaryValue = value;
}

function setTimeValue(value) {
    calculateResultPercent();
    calculateProfit();
    timeValue = value;
}

function setYearValue(value) {
    calculateResultPercent();
    rewriteYear();
    calculateProfit();
    yearValue = value;
}

function calculateResultPercent() {
    if (timeValue == "Ежемесячно" && yearValue == 2) {
        result.value.percent = "6.20";
    } else if (timeValue == "Ежемесячно" && yearValue == 3) {
        result.value.percent = "6.75";
    } else if (timeValue == "В конце срока" && yearValue == 2) {
        result.value.percent = "6.60";
    } else if (timeValue == "В конце срока" && yearValue == 3) {
        result.value.percent = "7.50";
    } else {
        result.value.percent = "0";
    }
}

function rewriteYear() {
    yearValue == "2 года" ? (yearValue = 2) : (yearValue = 3);
}

function calculateProfit() {
    result.value.profit =
        salaryValue * yearValue * (result.value.percent / 100);
    result.value.profitMonth = salaryValue + result.value.profit;
}

function calculate() {
    return result;
}

export function useCalculationState() {
    return {
        setSalaryValue,
        setTimeValue,
        setYearValue,
        calculate,
    };
}
