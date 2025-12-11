
 //Convierte una temperatura de grados Celsius a Fahrenheit.
function celsiusToFahrenheit(celsius) {
    // Validar que el valor sea numérico, aunque JavaScript ya maneja esto.
    if (typeof celsius !== 'number') {
        console.error("Error: La entrada debe ser un número.");
        return NaN; // Retorna Not a Number en caso de error
    }
    
    // Aplicación directa de la fórmula.
    const fahrenheit = (celsius * (9 / 5)) + 32;
    
    // Usamos toFixed(2) para limitar a dos decimales, proporcionando un resultado limpio.
    return parseFloat(fahrenheit.toFixed(2));
}

const ceroCelsius = 0;
const cienCelsius = 100;
const veinteCelsius = 20;

console.log(`${ceroCelsius}°C es igual a ${celsiusToFahrenheit(ceroCelsius)}°F`);
console.log(`${cienCelsius}°C es igual a ${celsiusToFahrenheit(cienCelsius)}°F`);
console.log(`${veinteCelsius}°C es igual a ${celsiusToFahrenheit(veinteCelsius)}°F`);