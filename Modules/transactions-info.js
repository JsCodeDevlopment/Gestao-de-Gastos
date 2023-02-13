import { currencyFormatter } from "./currency-formatter.js";

const elementTotalIncome = document.querySelector("#green");
const elementTotalCost = document.querySelector("#red");
const elementBalance = document.querySelector(".titleFontValue");

elementTotalIncome.innerText = currencyFormatter.format(0);
elementTotalCost.innerText = currencyFormatter.format(0);
elementBalance.innerText = currencyFormatter.format(0);

export const transactionsInfo = {
  balance: 0,
  totalIncome: 0,
  totalCost: 0,
  positiveTransactions: [],
  negativeTransactions: [],
  updateBalance() {
    const totalIncome = this.positiveTransactions.reduce(
      (accumulator, currentTransaction) => accumulator + currentTransaction.amount, 0);

    const totalCost = this.negativeTransactions.reduce(
      (accumulator, currentTransaction) => accumulator + currentTransaction.amount, 0);

    const calc = totalIncome + totalCost;
    this.balance = calc
  },
  updateIncome() {
    const calculatedTotalIncome = this.positiveTransactions.reduce(
      (accumulator, currentTransaction) => accumulator + currentTransaction.amount, 0);

    this.totalIncome = calculatedTotalIncome;
  },
  updateCost() {
    const calculatedTotalCost = this.negativeTransactions.reduce(
      (accumulator, currentTransaction) => accumulator + currentTransaction.amount, 0);

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
  removeTransaction(transactionToRemove) {
    if (transactionToRemove.amount >= 0) {
      this.positiveTransactions = this.positiveTransactions.filter((t) => t.id !== transactionToRemove.id)
    } else {
      this.negativeTransactions = this.negativeTransactions.filter((t) => t.id !== transactionToRemove.id)
    }

    this.updateAll()
  },
  addNewTransaction(transaction) {
    if (transaction.amount >= 0) {
      this.positiveTransactions.push(transaction)
    } else {
      this.negativeTransactions.push(transaction)
    }
  }
}
