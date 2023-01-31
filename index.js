const inputName = document.querySelector("#nameInput")
const inputValue = document.querySelector("#numberInput")
const addButton = document.querySelector("#addButton")
const divReceptora = document.querySelector(".transacoesAdicionadas")

addButton.addEventListener("click", ()=>{
    let divCard = document.createElement("div");
    divCard.className = "card"
    divReceptora.appendChild(divCard)

    let pName = document.createElement("p");
    pName.className = "mainFont"
    pName.innerText = `${inputName.value}`
    divCard.append(pName)

    let divPriceAndTrash = document.createElement("div");
    divPriceAndTrash.className = "priceAndTrash"
    divCard.append(divPriceAndTrash)

    let pValue = document.createElement("p");
    const currencyFormatter = new Intl.NumberFormat(undefined, { style: "currency", currency: "BRL" })
    pValue.className = "mainFont"
    pValue.innerText = currencyFormatter.format(inputValue.value)
    divPriceAndTrash.append(pValue)

    let trashImage = document.createElement("img");
    trashImage.src = "Imagens/LIXEIRA FECHADA.png"
    trashImage.width = "14"
    trashImage.height = "18"
    trashImage.id = "trash"
    divPriceAndTrash.append(trashImage)

    const atualTrashImage = document.querySelector("#trash")
    function toggleTrashImage(atualTrashImage) {
      atualTrashImage.addEventListener("mouseover", ()=> {
        atualTrashImage.setAttribute("src", "Imagens/LIXEIRA ABERTA.png");
      });
      atualTrashImage.addEventListener("mouseout", ()=> {
        atualTrashImage.setAttribute("src", "Imagens/LIXEIRA FECHADA.png");
      });
    }
    toggleTrashImage(atualTrashImage)

    console.log(atualTrashImage)
  })