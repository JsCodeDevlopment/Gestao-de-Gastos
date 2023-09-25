import { toggleEditImage, toggleTrashImage } from "./animations.js";
import { currencyFormatter } from "./currency-formatter.js";
import { transactionsInfo } from "./transactions-info.js";

function createCardContainer(className, id) {
  const container = document.createElement("div");
  container.className = className;
  container.id = id;
  return container;
}
function createCardTitle(className, text, id) {
  const title = document.createElement("p");
  title.className = className;
  title.innerText = text;
  title.id = id
  return title;
}

function createCardContentContainer(className) {
  const contentContainer = document.createElement("div");
  contentContainer.className = className;
  return contentContainer;
}

function createCardPrice(className, value, id) {
  const price = document.createElement("p");
  price.className = className;
  price.innerText = currencyFormatter.format(value);
  price.id = id
  return price;
}

function createCardButton(id, callback, content, ariaLabel = "") {
  const button = document.createElement("button");
  button.id = id;
  button.ariaLabel = ariaLabel;
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

export function createCard(index, transaction) {
  const cardContainer = createCardContainer("card", `card-${index}`);
  const cardTitle = createCardTitle("mainFont", transaction.title, "title");
  const cardContentContainer = createCardContentContainer("cardContent");
  const cardPrice = createCardPrice("mainFont", transaction.amount, "price");
  const editImage = createImage("Imagens/EDIT-BUTTON.png", "edit");
  toggleEditImage(editImage)
  const editButton = createCardButton(
    "editButton",
    () => {
      const card = editButton.closest(".card");
      const cardEditIdInput = document.querySelector("#editCardId");
      const transactionEditIdInput = document.querySelector("#editTransactionId");
      const inputName = document.querySelector("#nameInput");
      const inputValue = document.querySelector("#numberInput");
      const transactionToEdit = transactionsInfo.getTransaction(transaction.id)

      cardEditIdInput.value = card.id;
      transactionEditIdInput.value = transactionToEdit.id;
      inputName.value = transactionToEdit.title
      inputValue.value = transactionToEdit.amount
      inputName.focus()
    },
    editImage,
    `Editar transação ${transaction.title}`
  );
  const deleteImage = createImage("Imagens/LIXEIRA FECHADA.png", "trash");
  toggleTrashImage(deleteImage)
  const deleteButton = createCardButton(
    "deleteButton",
    () => {
      const card = deleteButton.closest(".card");
      card.remove();
      transactionsInfo.removeTransaction(transaction.id);
    },
    deleteImage,
    `Deletar transação ${transaction.title}`
  );

  cardContentContainer.append(cardPrice, editButton, deleteButton);
  cardContainer.append(cardTitle, cardContentContainer);

  return cardContainer;
}
