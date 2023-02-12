import { currencyFormatter } from "./currency-formatter.js";
import { values } from "./values.js";

function createCardContainer(className, id) {
  const container = document.createElement("div");
  container.className = className;
  container.id = id;
  return container;
}
function createCardTitle(className, text) {
  const title = document.createElement("p");
  title.className = className;
  title.innerText = text;
  return title;
}

function createCardContentContainer(className) {
  const contentContainer = document.createElement("div");
  contentContainer.className = className;
  return contentContainer;
}

function createCardPrice(className, value) {
  const price = document.createElement("p");
  price.className = className;
  price.innerText = currencyFormatter.format(value);
  return price;
}

function createCardButton(id, callback, content) {
  const button = document.createElement("button");
  button.id = id;
  button.append(content);
  button.addEventListener("click", callback);
  return button;
}
function createImage(src, className) {
  const image = document.createElement("img");
  image.src = src;
  image.className = className;
  return image;
}

export function createCard(index, cardTitle, value, editIdInput) {
  const cardContainer = createCardContainer("card", `card-${index}`);
  const cardName = createCardTitle("mainFont", cardTitle);
  const cardContentContainer = createCardContentContainer("cardContent");
  const cardPrice = createCardPrice("mainFont", value);
  const editImage = createImage("Imagens/EDIT-BUTTON.png", "edit");
  const editButton = createCardButton(
    "editButton",
    () => {
      const card = editButton.closest(".card");
      editIdInput.value = card.id;
    }, editImage);
  const deleteImage = createImage("Imagens/LIXEIRA FECHADA.png", "trash");
  const deleteButton = createCardButton(
    "deleteButton",
    () => {
      const card = deleteButton.closest(".card");
      card.remove();
      values.removeValue(value)
    }, deleteImage);

  cardContentContainer.append(cardPrice, editButton, deleteButton);
  cardContainer.append(cardName, cardContentContainer);

  return cardContainer
}
