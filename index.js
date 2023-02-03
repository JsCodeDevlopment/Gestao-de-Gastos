import { toggleTrashImage } from "./animations.js";
let indiceCard = 0;

const inputName = document.querySelector("#nameInput")
const inputValue = document.querySelector("#numberInput")
const addButton = document.querySelector("#addButton")
const divReceptora = document.querySelector(".transacoesAdicionadas")
const pValorReceitas = document.querySelector("#green")
const pValorDespesas = document.querySelector("#red")
const pSaldoAtual = document.querySelector(".titleFontValue")

let positiveValue = [];
let negativeValue = [];

addButton.addEventListener("click", ()=>{
    indiceCard ++

    const divCard = document.createElement("div");
    divCard.className = "card"
    divCard.id = "card-" + indiceCard;
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
    pValue.id = "valor-" + indiceCard;
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
    document.querySelectorAll("valor-").forEach((pValue)=>{
      const pValueAcrecimo = document.querySelector(`#${pValue.id}`)
    })
    
    function addNumber(input) {
      if (input >= 0) {
        positiveValue.push(input);
        console.log(`${positiveValue} Esse é o valor positivo`)
      } else {
        negativeValue.push(input);
        console.log(`${negativeValue} Esse é o valor negativo`)
      }
    }
    let input = parseInt(inputValue.value)
    addNumber(input);

    const valoresPositivos = positiveValue.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const valoresNegativos = negativeValue.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const valueGreen = new Intl.NumberFormat(undefined, { style: "currency", currency: "BRL" })
    pValorReceitas.innerText = valueGreen.format(valoresPositivos)
    const valueRed = new Intl.NumberFormat(undefined, { style: "currency", currency: "BRL" })
    pValorDespesas.innerText = valueRed.format(valoresNegativos)
    
    const SaldoAtualResult = parseFloat(valueGreen.format(valoresPositivos).replace(/[^0-9,]+/g,"").replace(",", "."))
     - parseFloat(valueRed.format(valoresNegativos).replace(/[^0-9,]+/g,"").replace(",", "."))
    const valueAtualCalculed = new Intl.NumberFormat(undefined, { style: "currency", currency: "BRL" })
    pSaldoAtual.innerText = valueAtualCalculed.format(SaldoAtualResult)

    console.log(SaldoAtualResult)
  })