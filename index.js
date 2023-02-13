import { start, toggleEditImage } from "./Modules/animations.js";
import { toggleTrashImage } from "./Modules/animations.js";
import { deleteInputValues } from "./Modules/animations.js";
import { createCard } from "./Modules/create-card.js";
import { toggleTheme } from "./Modules/theme.js";
import { transactionsInfo } from "./Modules/transactions-info.js";

start();

let indiceCard = 0;

const inputName = document.querySelector("#nameInput");
const inputValue = document.querySelector("#numberInput");
const addButton = document.querySelector("#addButton");
const divReceptora = document.querySelector(".transacoesAdicionadas");
const editIdInput = document.querySelector("#editCardId");



addButton.addEventListener("click", () => {
  if (inputName.value === "" || inputValue.value === "") {
    alert("Preencha os campos!");
    return;
  }

  indiceCard++;

  const transaction =  {
    id: crypto.randomUUID(),
    title: inputName.value,
    amount: inputValue.valueAsNumber,
  }

  const card = createCard(
    indiceCard,
    transaction,
    editIdInput
  );
  divReceptora.appendChild(card);

  document.querySelectorAll(".card").forEach((card) => {
    const atualTrashImage = document.querySelector(`#${card.id} .trash`);
    toggleTrashImage(atualTrashImage);
  });

  document.querySelectorAll(".card").forEach((card) => {
    const atualEditImage = document.querySelector(`#${card.id} .edit`);
    toggleEditImage(atualEditImage);
  });

  transactionsInfo.addNewTransaction(transaction)
  transactionsInfo.updateAll()

  deleteInputValues();
});

inputValue.addEventListener("keypress", (e) => {
  if (e.key === "e") {
    e.preventDefault();
  }
});

const toggleThemeButton = document.querySelector("#toggleThemeButton");
toggleThemeButton.addEventListener("click", toggleTheme);