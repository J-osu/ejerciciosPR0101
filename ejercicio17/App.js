/**
 * Tomamos un array de números y lo ordenamos de menor a mayor enascendente.
 * Utilizamos el método sort() con una función de comparación.
 */
function ordenarArrayNumerico(arr) {
    if (!Array.isArray(arr)) {
        console.error("Error: La entrada debe ser un array.");
        return [];
    }
    
    // El método sort() por defecto ordena por el valor Unicode (como si fueran strings),
    // por eso es OBLIGATORIO pasar una función de comparación para ordenar números correctamente.
    const arrayOrdenado = arr.sort((a, b) => {
        // Si (a - b) es negativo, 'a' va antes que 'b'
        // Si (a - b) es positivo, 'b' va antes que 'a'.
        // Si es cero, el orden relativo no cambia.
        return a - b;
    });

    return arrayOrdenado;
}

const numerosDesordenados = [45, 12, 89, 5, 67, 33, 90, 1];

console.log("Array original:", numerosDesordenados);

const numerosOrdenados = ordenarArrayNumerico(numerosDesordenados);

console.log("Array ordenado (Menor a Mayor):", numerosOrdenados);