let claveValida = false;
let clave = "";

// Definimos los caracteres prohibidos
const simbolosProhibidos = "@!%$&#";

while (!claveValida) {
  clave = prompt("Ingresá tu clave (sin símbolos extraños ni números consecutivos):");

  // Validación básica por si presiona cancelar o lo deja vacío
  if (!clave) {
    alert("Debes ingresar una clave.");
    continue;
  }

  let tieneSimboloProhibido = false;
  let tieneConsecutivos = false;

  // Recorremos la clave caracter por caracter
  for (let i = 0; i < clave.length; i++) {
    let actual = clave[i];
    let siguiente = clave[i + 1];

    // 1. Verificamos si el caracter actual está entre los prohibidos
    if (simbolosProhibidos.includes(actual)) {
      tieneSimboloProhibido = true;
    }

    // 2. Verificamos números consecutivos ascendentes (ej: '1' y luego '2')
    if (siguiente !== undefined) {
      let numActual = parseInt(actual);
      let numSiguiente = parseInt(siguiente);

      // Comprobamos que ambos sean números válidos y correlativos
      if (!isNaN(numActual) && !isNaN(numSiguiente)) {
        if (numSiguiente === numActual + 1) {
          tieneConsecutivos = true;
        }
      }
    }
  }

  // Evaluamos las condiciones
  if (tieneSimboloProhibido) {
    alert("Error: la clave contiene símbolos no permitidos (@, !, %, $, &, #).");
  } else if (tieneConsecutivos) {
    alert("Error: la clave no puede contener números consecutivos (ej. 12, 45, 89).");
  } else {
    claveValida = true;
    alert("¡Clave creada con éxito!");
  }
}

console.log("Clave registrada correctamente.");
