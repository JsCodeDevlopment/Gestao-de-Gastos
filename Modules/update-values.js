import { currencyFormatter } from "./currency-formatter.js";

const pValorReceitas = document.querySelector("#green");
const pValorDespesas = document.querySelector("#red");
const pSaldoAtual = document.querySelector(".titleFontValue");

pSaldoAtual.innerText = currencyFormatter.format(0);
pValorReceitas.innerText = currencyFormatter.format(0);
pValorDespesas.innerText = currencyFormatter.format(0);

export function updateBalance(positiveValues, negativeValues) {
  const valoresPositivos = positiveValues.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0);
  const valoresNegativos = negativeValues.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0);
  const calc = valoresPositivos + valoresNegativos;
  pSaldoAtual.innerText = currencyFormatter.format(calc);
}

export function updateRevenue(positiveValues) {
  const newRevenue = positiveValues.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0);
  pValorReceitas.innerText = currencyFormatter.format(newRevenue);
}

export function updateExpense(negativeValues) {
  const newExpense = negativeValues.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0);
  pValorDespesas.innerText = currencyFormatter.format(newExpense);
}
