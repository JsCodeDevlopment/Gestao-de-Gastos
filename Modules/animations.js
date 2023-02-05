export function start() {
  const pMesDeReferencia = document.querySelector("#refMes")
  let mesDeReferencia = prompt("Seja Bem Vindo!\n" + "Para começar, primeiramente diga-nos qual é o mês de referência.\n"
  + "Vamos lá!?\n" + "Digite abaixo o nome do mês\n"
  + "Ex: Agosto")
pMesDeReferencia.innerText = `${mesDeReferencia}`
}

export function toggleTrashImage(atualTrashImage) {
    atualTrashImage.addEventListener("mouseover", ()=> {
      atualTrashImage.setAttribute("src", "Imagens/LIXEIRA ABERTA.png");
    });
    atualTrashImage.addEventListener("mouseout", ()=> {
      atualTrashImage.setAttribute("src", "Imagens/LIXEIRA FECHADA.png");
    });
  }

export function deleteInputValues () {
  const inputName = document.querySelector("#nameInput")
  const inputValue = document.querySelector("#numberInput")

  inputName.value = ""
  inputValue.value = ""
}





//Create Light Mode
// Changes
// const darkMode = document.getElementById("#darkModeButton")


// const navegation = document.querySelector(".navegation")
// navegation.style.backgroundColor = "#fff"
// const mainContainer = document.querySelector(".mainContainer")
// mainContainer.style.backgroundColor = "#e8f5f6"
// const contentContainer = document.querySelector(".container")
// contentContainer.style.backgroundColor = "#fff"
// const footer = document.querySelector("footer")
// footer.style.backgroundColor = "#fff"
// const inputName = document.querySelector("#nameInput")
// inputName.style.backgroundColor = "#fff"
// inputName.style.color = "#000"
// const inputValue = document.querySelector("#numberInput")
// inputValue.style.backgroundColor = "#fff"
// inputValue.style.color = "#000"
// const littleFont = document.querySelectorAll(".littleFont")
// console.log(littleFont)
// littleFont[0].style.color = "#000"
// littleFont[1].style.color = "#000"
// // const card = document.querySelector(".card")
// // card.style.backgroundColor = "#fff"
// // const texts = document.querySelector(".mainfont")
// // texts.style.color = "#000"