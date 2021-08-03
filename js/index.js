const color = document.querySelector("#color");
const salida = document.querySelector("#salida");
const colorStorage = localStorage.getItem("color") || "#FFFFFF";
color.value = colorStorage;

const setColor = () => {
  const value = color.value;
  salida.innerHTML = value;
  salida.style.background = value;
};

const saveValue = (value) => {
  localStorage.setItem("color", value);
};

setColor();
color.addEventListener("input", setColor);
color.addEventListener("change", () => saveValue(color.value));
