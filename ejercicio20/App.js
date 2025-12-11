/**
 * Conviertir una cadena de texto a mayúsculas y luego a minúsculas,
 * mostrando ambos resultados en la consola.
 */
function convertirCaso(cadena) {
    // Verificar si la entrada es una cadena válida
    if (typeof cadena !== 'string' || cadena.trim() === "") {
        console.error("Error: Por favor, ingrese una cadena de texto válida y no vacía.");
        return;
    }

    // Conversión a mayúsculas
    const cadenaMayusculas = cadena.toUpperCase();

    // Conversión a minúsculas
    const cadenaMinusculas = cadena.toLowerCase();

    // Mostrar los resultados
    console.log("--- Resultados de Conversión ---");
    console.log(`Cadena Original: "${cadena}"`);
    console.log(`En Mayúsculas (toUpperCase()): "${cadenaMayusculas}"`);
    console.log(`En Minúsculas (toLowerCase()): "${cadenaMinusculas}"`);
    console.log("------------------------------");
}
const texto1 = "Este Es un Texto de Prueba con Varias letras y ESPACIOS.";
const texto2 = "BACKEND Y FRONTEND";

convertirCaso(texto1);
convertirCaso(texto2);