import { currencyFormatter } from "./currency-formatter.js";

const elementIncome = document.querySelector("#green");
const elementCost = document.querySelector("#red");
const elementBalance = document.querySelector(".titleFontValue");

elementIncome.innerText = currencyFormatter.format(0);
elementCost.innerText = currencyFormatter.format(0);
elementBalance.innerText = currencyFormatter.format(0);

export const transactionsInfo = {
  balance: 0,
  income: 0,
  cost: 0,
  transactions: [],
  updateBalance() {
    const calculatedBalance = this.transactions.reduce(
      (total, currentTransaction) => total + currentTransaction.amount,
      0
    );

    this.balance = calculatedBalance;
  },
  updateIncome() {
    const calculatedIncome = this.transactions.reduce(
      (total, currentTransaction) => {
        if (currentTransaction.amount <= 0) {
          return total;
        }
        return total + currentTransaction.amount;
      },
      0
    );
    this.income = calculatedIncome;
  },
  updateCost() {
    const calculatedTotalCost = this.transactions.reduce(
      (total, currentTransaction) => {
        if (currentTransaction.amount > 0) {
          return total;
        }
        return total + currentTransaction.amount;
      },
      0
    );

    this.cost = calculatedTotalCost;
  },
  updateTextElements() {
    elementBalance.innerText = currencyFormatter.format(this.balance);
    elementIncome.innerText = currencyFormatter.format(this.income);
    elementCost.innerText = currencyFormatter.format(this.cost);
  },
  updateAll() {
    this.updateIncome();
    this.updateCost();
    this.updateBalance();
    this.updateTextElements();
  },
  removeTransaction(id) {
    this.transactions = this.transactions.filter(t => t.id !== id)

    this.updateAll();
  },
  addNewTransaction(transaction) {
    this.transactions.push(transaction)
  },
  updateTransaction(id, newTransaction) {
    this.transactions = this.transactions.map(transaction => transaction.id === id ? newTransaction : transaction)
    this.updateAll()
  },
  getTransaction(id){
    const transaction = this.transactions.find(t => t.id === id)

    return transaction
  }
};
