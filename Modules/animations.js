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

const darkMode = document.querySelector("#darkModeButton")
const root = document.documentElement;
darkMode.addEventListener("click", ()=>{
  const lightImg = document.querySelector("#darkModeImg")
if (lightImg.className === "lightImg") {
  lightImg.className = "darkImg"
  lightImg.src = "Imagens/BUTTON DARK MODE.png";
  root.style.setProperty("--cor-principal", "#fff")
  root.style.setProperty("--cor-back", "#e8f5f6")
  root.style.setProperty("--cor-random-font", "#000")
  root.style.setProperty("--cor-input", "#000")
} else {
  lightImg.className = "lightImg"
  lightImg.src = "Imagens/BUTTON LIGHT MODE.png";
  root.style.setProperty("--cor-principal", "#131f2b")
  root.style.setProperty("--cor-back", "#121617")
  root.style.setProperty("--cor-random-font", "#fff")
  root.style.setProperty("--cor-input", "#fff")
}
})