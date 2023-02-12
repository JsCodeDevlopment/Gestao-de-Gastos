import { currencyFormatter } from "./currency-formatter.js";

const elementTotalIncome = document.querySelector("#green");
const elementTotalCost = document.querySelector("#red");
const elementBalance = document.querySelector(".titleFontValue");

elementTotalIncome.innerText = currencyFormatter.format(0);
elementTotalCost.innerText = currencyFormatter.format(0);
elementBalance.innerText = currencyFormatter.format(0);

export const values = {
  balance: 0,
  totalIncome: 0,
  totalCost: 0,
  positiveValues: [],
  negativeValues: [],
  updateBalance() {
    const totalIncome = this.positiveValues.reduce(
      (accumulator, currentValue) => accumulator + currentValue, 0);

    const totalCost = this.negativeValues.reduce(
      (accumulator, currentValue) => accumulator + currentValue, 0);

    const calc = totalIncome + totalCost;
    this.balance = calc
  },
  updateIncome() {
    const calculatedTotalIncome = this.positiveValues.reduce(
      (accumulator, currentValue) => accumulator + currentValue, 0);

    this.totalIncome = calculatedTotalIncome;
  },
  updateCost() {
    const calculatedTotalCost = this.negativeValues.reduce(
      (accumulator, currentValue) => accumulator + currentValue, 0);

    this.totalCost = calculatedTotalCost;
  },
  updateTextElements() {
    elementBalance.innerText = currencyFormatter.format(this.balance)
    elementTotalIncome.innerText = currencyFormatter.format(this.totalIncome)
    elementTotalCost.innerText = currencyFormatter.format(this.totalCost)
  },
  updateAll() {
    this.updateIncome()
    this.updateCost()
    this.updateBalance()
    this.updateTextElements()
  },
  removeValue(valueToRemove) {
    if (valueToRemove >= 0) {
      this.positiveValues = this.positiveValues.filter((v) => v !== valueToRemove)
    } else {
      this.negativeValues = this.negativeValues.filter((v) => v !== valueToRemove)
    }

    this.updateAll()
  },
  addNewValue(value) {
    if (value >= 0) {
      this.positiveValues.push(value)
    } else {
      this.negativeValues.push(value)
    }
  }
}
