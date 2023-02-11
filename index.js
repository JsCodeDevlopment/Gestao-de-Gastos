import { start, toggleEditImage } from "./Modules/animations.js";
import { toggleTrashImage } from "./Modules/animations.js";
import { deleteInputValues } from "./Modules/animations.js";
import { createCard } from "./Modules/create-card.js";
import { toggleTheme } from "./Modules/theme.js";
import { updateBalance, updateExpense, updateRevenue, } from "./Modules/update-values.js";

start();

let indiceCard = 0;

const inputName = document.querySelector("#nameInput");
const inputValue = document.querySelector("#numberInput");
const addButton = document.querySelector("#addButton");
const divReceptora = document.querySelector(".transacoesAdicionadas");
const editIdInput = document.querySelector("#editCardId");

let positiveValues = [];
let negativeValues = [];

function addNumber(input) {
  if (input >= 0) {
    positiveValues.push(input);
  } else {
    negativeValues.push(input);
  }
}

addButton.addEventListener("click", () => {
  if (inputName.value === "" || inputValue.value === "") {
    alert("Preencha os campos!");
    return;
  }
console.log (positiveValues)
console.log (negativeValues)
  indiceCard++;

  const card = createCard(
    indiceCard,
    inputName.value,
    inputValue.value,
    editIdInput,
    positiveValues,
    negativeValues
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

  let input = parseInt(inputValue.value);
  addNumber(input);
  updateRevenue(positiveValues);
  updateExpense(negativeValues);
  updateBalance(positiveValues, negativeValues);
  deleteInputValues();
});

inputValue.addEventListener("keypress", (e) => {
  if (e.key === "e") {
    e.preventDefault();
  }
});

const toggleThemeButton = document.querySelector("#toggleThemeButton");
toggleThemeButton.addEventListener("click", toggleTheme);