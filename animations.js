export function toggleTrashImage(atualTrashImage) {
    atualTrashImage.addEventListener("mouseover", ()=> {
      atualTrashImage.setAttribute("src", "Imagens/LIXEIRA ABERTA.png");
    });
    atualTrashImage.addEventListener("mouseout", ()=> {
      atualTrashImage.setAttribute("src", "Imagens/LIXEIRA FECHADA.png");
    });
  }


  