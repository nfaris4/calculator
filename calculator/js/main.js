// Crear calculadora
// 1. Agafar dades de la pantalla
// 2. Agafar dades dels botons
// 3. Mostrar dades a la pantalla
// 4. Realitzar operacions
const pantalla = document.querySelector(".pantalla"); // Selecciona la pantalla
const botones = document.querySelectorAll(".btn"); // Selecciona tots els botons

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;

    if (boton.id === "c") { // Neteja la pantalla
      pantalla.textContent = "0";
      return;
    }

    if (boton.id === "borrar") { // Esborra l'últim caràcter o reinicia
      if (pantalla.textContent.length === 1 || pantalla.textContent === "Error") {
        pantalla.textContent = "0";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      return;
    }

    if (boton.id === "igual") { // Avalua l'expressió i mostra el resultat
      try {
        pantalla.textContent = eval(pantalla.textContent);
      } catch {
        pantalla.textContent = "Error";
      }
      return;
    }

    // Afegeix el text del botó a la pantalla o el reemplaça
    if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
      pantalla.textContent = botonApretado;
    } else {
      pantalla.textContent += botonApretado; 
    }
  });
});
