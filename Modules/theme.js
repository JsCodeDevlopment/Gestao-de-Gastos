const root = document.documentElement;
const lightImg = document.querySelector("#darkModeImg")

export function toggleTheme() {
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
}