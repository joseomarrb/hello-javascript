/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
console.log('Hola Mundo' + " estoy aquí de nuevo!");

// 2. Muestra la longitud de una cadena de texto
let cadena = 'José Omar Rosado Bueno';
console.log(cadena.length);

// 3. Muestra el primer y último carácter de un string
console.log(cadena[0]);
console.log(cadena[cadena.length - 1]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena.toUpperCase());
console.log(cadena.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
let newChain = `Esta es
Una Cadena
De Varias
Líneas`;

// 6. Interpola el valor de una variable en un string
console.log(`Hola ${cadena}! Cómo estás?`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(cadena.replaceAll(' ', '-'));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(cadena.includes('Omar'))

// 9. Comprueba si dos strings son iguales
console.log('Hola Mundo' === 'Bye Mundo');

// 10. Comprueba si dos strings tienen la misma longitud
console.log('Hola Mundo'.length === cadena.length);