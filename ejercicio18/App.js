/**
 * Encuentramos la palabra más larga dentro de una cadena de texto.
 * La función usa split() para separar las palabras y un bucle for para la comparación.
 */
function encontrarPalabraMasLarga(frase) {
    if (typeof frase !== 'string' || frase.trim() === "") {
        return "Error: Por favor, ingrese una frase válida.";
    }

    // Usar split() para dividir la frase en un array de palabras.
    // Usamos un espacio como delimitador.
    const palabras = frase.split(' ');

    let palabraMasLarga = "";

    // Recorrer el array con un bucle.
    for (const palabra of palabras) {
        // Limpiamos la palabra de posibles signos de puntuación.
        // La expresión regular /\W/g elimina todos los caracteres no alfanuméricos.
        const palabraLimpia = palabra.replace(/[\W_]/g, '');

        // Comparar la longitud de la palabra limpia con la longitud actual de la palabra más larga.
        if (palabraLimpia.length > palabraMasLarga.length) {
            palabraMasLarga = palabraLimpia;
        }
    }

    return palabraMasLarga;
}

const frase1 = "El programador senior busca la solución más eficiente y elegante.";
const frase2 = "JavaScript es fundamental para el desarrollo frontend y backend.";
const frase3 = "Rápido"; 

console.log(`Frase: "${frase1}" -> Palabra más larga: "${encontrarPalabraMasLarga(frase1)}"`);

console.log(`Frase: "${frase2}" -> Palabra más larga: "${encontrarPalabraMasLarga(frase2)}"`);

console.log(`Frase: "${frase3}" -> Palabra más larga: "${encontrarPalabraMasLarga(frase3)}"`);