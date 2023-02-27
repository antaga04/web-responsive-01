const botonFlotante = document.getElementById("boton-flotante");

// botonFlotante.addEventListener("click", function (e) {
//   e.preventDefault();
//   const destino = document.getElementById("contenido-principal");
//   destino.scrollIntoView({ behavior: "smooth" });
// });

window.addEventListener("scroll", function () {
  const botonFlotante = document.getElementById("boton-flotante");
  if (window.scrollY > 0) {
    botonFlotante.classList.add("visible");
  } else {
    botonFlotante.classList.remove("visible");
  }
});

const smoothScrollUp = (e) => {
  e.preventDefault();
  const destino = document.getElementById("contenido-principal");
  destino.scrollIntoView({ behavior: "smooth" });
};

botonFlotante.addEventListener("click", smoothScrollUp);