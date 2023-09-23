import { toggleTrashImage, toggleEditImage } from "./Modules/animations.js";
import { createCard } from "./Modules/create-card.js";
import { currencyFormatter } from "./Modules/currency-formatter.js";
import { toggleTheme } from "./Modules/theme.js";
import { transactionsInfo } from "./Modules/transactions-info.js";
import { getDate } from "./Modules/getDate.js";

getDate();

let indiceCard = 0;

const inputName = document.querySelector("#nameInput");
const inputValue = document.querySelector("#numberInput");
const addButton = document.querySelector("#addButton");
const divReceptora = document.querySelector(".transacoesAdicionadas");
const cardEditIdInput = document.querySelector("#editCardId");
const transactionEditIdInput = document.querySelector("#editTransactionId");

function resetInputs() {
  inputName.value = "";
  inputValue.value = "";
  cardEditIdInput.value = "";
  transactionEditIdInput.value = "";
}

addButton.addEventListener("click", () => {
  if (inputName.value === "" || inputValue.value === "") {
    alert("Preencha os campos!");
    return;
  }

  const transaction = {
    id: crypto.randomUUID(),
    title: inputName.value,
    amount: inputValue.valueAsNumber,
  };

  if (cardEditIdInput.value !== "" || transactionEditIdInput.value !== "") {
    transactionsInfo.updateTransaction(transactionEditIdInput.value, {
      ...transaction,
      id: transactionEditIdInput.value,
    });

    const cardTitle = document.querySelector(
      `#${cardEditIdInput.value} #title`
    );
    const cardPrice = document.querySelector(
      `#${cardEditIdInput.value} #price`
    );
    if (!cardTitle || !cardPrice) {
      alert("Não foi encontrado o card especifico para atualizar.");

      resetInputs();

      return;
    }
    cardTitle.innerText = transaction.title;
    cardPrice.innerText = currencyFormatter.format(transaction.amount);

    resetInputs();

    return;
  }

  indiceCard++;

  const card = createCard(indiceCard, transaction);
  divReceptora.appendChild(card);

  document.querySelectorAll(".card").forEach((card) => {
    const atualTrashImage = document.querySelector(`#${card.id} .trash`);
    toggleTrashImage(atualTrashImage);
  });

  document.querySelectorAll(".card").forEach((card) => {
    const atualEditImage = document.querySelector(`#${card.id} .edit`);
    toggleEditImage(atualEditImage);
  });

  transactionsInfo.addNewTransaction(transaction);
  transactionsInfo.updateAll();

  resetInputs();
});

inputValue.addEventListener("keypress", (e) => {
  if (e.key === "e") {
    e.preventDefault();
  }
});

const toggleThemeButton = document.querySelector("#toggleThemeButton");
toggleThemeButton.addEventListener("click", toggleTheme);
