export function toggleTrashImage(atualTrashImage) {
  atualTrashImage.addEventListener("mouseover", () => {
    atualTrashImage.setAttribute("src", "Imagens/LIXEIRA ABERTA.png");
  });
  atualTrashImage.addEventListener("mouseout", () => {
    atualTrashImage.setAttribute("src", "Imagens/LIXEIRA FECHADA.png");
  });
}
export function toggleEditImage(atualTrashImage) {
  atualTrashImage.addEventListener("mouseover", () => {
    atualTrashImage.setAttribute("src", "Imagens/EDITING-BUTTON.png");
  });
  atualTrashImage.addEventListener("mouseout", () => {
    atualTrashImage.setAttribute("src", "Imagens/EDIT-BUTTON.png");
  });
}
