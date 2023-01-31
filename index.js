import { toggleTrashImage } from "./animations.js";
let indice = 0;

const inputName = document.querySelector("#nameInput")
const inputValue = document.querySelector("#numberInput")
const addButton = document.querySelector("#addButton")
const divReceptora = document.querySelector(".transacoesAdicionadas")

addButton.addEventListener("click", ()=>{
    indice++

    const divCard = document.createElement("div");
    divCard.className = "card"
    divCard.id = "card-" + indice;
    divReceptora.appendChild(divCard)

    const pName = document.createElement("p");
    pName.className = "mainFont"
    pName.innerText = `${inputName.value}`
    divCard.append(pName)

    const divPriceAndTrash = document.createElement("div");
    divPriceAndTrash.className = "priceAndTrash"
    divCard.append(divPriceAndTrash)

    const pValue = document.createElement("p");
    const currencyFormatter = new Intl.NumberFormat(undefined, { style: "currency", currency: "BRL" })
    pValue.className = "mainFont"
    pValue.innerText = currencyFormatter.format(inputValue.value)
    divPriceAndTrash.append(pValue)

    const deleteButton = document.createElement("button");
    deleteButton.id = "deleteButton"
    deleteButton.addEventListener("click", ()=>{
      const card = deleteButton.closest(".card")
      card.remove()
    })
    const trashImage = document.createElement("img");
    trashImage.src = "Imagens/LIXEIRA FECHADA.png"
    trashImage.width = "14"
    trashImage.height = "18"
    trashImage.classList.add("trash")
    deleteButton.append(trashImage)
  
    divPriceAndTrash.append(deleteButton)
    document.querySelectorAll(".card").forEach((card)=>{
      const atualTrashImage = document.querySelector(`#${card.id} .trash`)
      toggleTrashImage(atualTrashImage)
    })
  })
