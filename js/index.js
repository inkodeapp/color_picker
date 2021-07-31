const color = document.querySelector("#color");
const salida = document.querySelector("#salida");
const colorStorage = localStorage.getItem("color") || "#FFFFFF";
salida.style.background = colorStorage;
salida.innerHTML = colorStorage;

console.log(localStorage);
color.addEventListener("input", () => {
  const seleccion = color.value;

  salida.innerHTML = seleccion;
  salida.style.background = seleccion;
  salida.style.color = "#ffffff";
  localStorage.clear();
  localStorage.setItem("color", seleccion);
});
