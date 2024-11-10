//Crear calculadora
//1. Coger datos de pantalla
//2. Coger datos de botones
//3. Mostrar datos en pantalla
//4. Realizar operaciones
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn"); //es fa un array de botones

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;

    if (boton.id === "C") {
      pantalla.textContent = "0";
      return;
    }

    if (boton.id === "borrar") {
      if (pantalla.textContent.length === 1) {
        pantalla.textContent = "0";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      return;
    }

    if (boton.id === "igual") {
      pantalla.textContent = eval(pantalla.textContent);

    if (pantalla.textContent === "0") {
      pantalla.textContent = botonApretado;
    } else {
      pantalla.textContent += botonApretado; 
    }
  });
});
