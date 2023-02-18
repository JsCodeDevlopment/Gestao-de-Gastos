export function start() {
  const pMesDeReferencia = document.querySelector("#refMes")

  const selectMes = document.createElement("select")
  selectMes.id = "selectMes"
  pMesDeReferencia.append(selectMes)

  const defaltOption = document.createElement("option")
  defaltOption.value = "text"
  defaltOption.innerText = "ESCOLHA O MÊS!"
  selectMes.append(defaltOption)

  function makeOptions(value, mes) {
    const option = document.createElement("option")
    option.value = value
    option.innerText = mes
    selectMes.append(option)
    return option
  }
  makeOptions("text", "JANEIRO")
  makeOptions("text", "FEVEREIRO")
  makeOptions("text", "MARÇO")
  makeOptions("text", "ABRIL")
  makeOptions("text", "MAIO")
  makeOptions("text", "JUNHO")
  makeOptions("text", "JULHO")
  makeOptions("text", "AGOSTO")
  makeOptions("text", "SETEMBRO")
  makeOptions("text", "OUTUBRO")
  makeOptions("text", "NOVEMBRO")
  makeOptions("text", "DEZEMBRO")
}

export function toggleTrashImage(atualTrashImage) {
    atualTrashImage.addEventListener("mouseover", ()=> {
      atualTrashImage.setAttribute("src", "Imagens/LIXEIRA ABERTA.png");
    });
    atualTrashImage.addEventListener("mouseout", ()=> {
      atualTrashImage.setAttribute("src", "Imagens/LIXEIRA FECHADA.png");
    });
  }
export function toggleEditImage(atualTrashImage) {
    atualTrashImage.addEventListener("mouseover", ()=> {
      atualTrashImage.setAttribute("src", "Imagens/EDITING-BUTTON.png");
    });
    atualTrashImage.addEventListener("mouseout", ()=> {
      atualTrashImage.setAttribute("src", "Imagens/EDIT-BUTTON.png");
    });
  }

export function deleteInputValues () {
  const inputName = document.querySelector("#nameInput")
  const inputValue = document.querySelector("#numberInput")

  inputName.value = ""
  inputValue.value = ""
}