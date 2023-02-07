import { start } from "./Modules/animations.js";
import { toggleTrashImage } from "./Modules/animations.js";
import { deleteInputValues } from "./Modules/animations.js";

start()

let indiceCard = 0;

const currencyFormatter = new Intl.NumberFormat(undefined, { style: "currency", currency: "BRL" })

const inputName = document.querySelector("#nameInput")
const inputValue = document.querySelector("#numberInput")
const addButton = document.querySelector("#addButton")
const divReceptora = document.querySelector(".transacoesAdicionadas")
const pValorReceitas = document.querySelector("#green")
const pValorDespesas = document.querySelector("#red")
const pSaldoAtual = document.querySelector(".titleFontValue")

pSaldoAtual.innerText = "R$ 0,00"
pValorReceitas.innerText = "R$ 0,00"
pValorDespesas.innerText = "R$ 0,00"

let positiveValues = [];
let negativeValues = [];

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
    pValue.className = "mainFont"
    pValue.innerText = currencyFormatter.format(inputValue.value)
    pValue.id = "valor-" + indiceCard;
    divPriceAndTrash.append(pValue)

    const deleteButton = document.createElement("button");
    deleteButton.id = "deleteButton"
    deleteButton.addEventListener("click", ()=>{
      const card = deleteButton.closest(".card")
      card.remove()
      function removeValue (input) {
        if (input >= 0) {
          positiveValues = positiveValues.filter(function(el) {
            return el !== input;
          }); 
        } else {
          negativeValues = negativeValues.filter(function(el) {
            return el !== input;})
          }
          updateRevenue(positiveValues)
          updateExpense(negativeValues)
          updateBalance(positiveValues, negativeValues)
          
        }
      removeValue(input)
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
        positiveValues.push(input);
      } else {
        negativeValues.push(input);
      }
    }
    let input = parseInt(inputValue.value)
    addNumber(input);

    updateRevenue(positiveValues)
    updateExpense(negativeValues)
    updateBalance(positiveValues, negativeValues)
    deleteInputValues()
    sessionStorage.setItem('positiveValues', JSON.stringify(positiveValues))
    sessionStorage.setItem('negativeValues', JSON.stringify(negativeValues))
  })

  function updateBalance (positiveValues, negativeValues) {
    const valoresPositivos = positiveValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const valoresNegativos = negativeValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const calc = valoresPositivos + valoresNegativos;

    pSaldoAtual.innerText = currencyFormatter.format(calc)
  }

  function updateRevenue (positiveValues) {
    const newRevenue = positiveValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    pValorReceitas.innerText = currencyFormatter.format(newRevenue)
  }

  function updateExpense (negativeValues) {
    const newExpense = negativeValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    pValorDespesas.innerText = currencyFormatter.format(newExpense)
  }

  sessionStorage.setItem('positiveValues', JSON.stringify(positiveValues)) || [];
  sessionStorage.setItem('negativeValues', JSON.stringify(negativeValues)) || [];
  console.log("ziriguidum")