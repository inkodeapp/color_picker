const color = document.querySelector("#color");
const salida = document.querySelector("#salida");

color.addEventListener("input", () => {
  const seleccion = color.value;

  salida.innerHTML = seleccion;
  salida.style.background = seleccion;
  salida.style.color = "#ffffff";
});
