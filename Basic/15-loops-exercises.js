/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 0; i <= 20; i++) { console.log(i) }

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let sumados = 1;
let numeros = 1;
while (numeros < 100) {
    numeros++;
    sumados += numeros;
}
console.log(sumados)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 0; i <= 50; i++) { if (i % 2 === 0) {console.log(i)} }

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
const nombres = ['José', 'Omar', 'Liz', 'Angeline'];
for (const nombre of nombres) {
    console.log(nombre)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadenaText = 'Hola Mundo! Que tal estan?';
let numeroDeVocales = 0;
const regex = /[aeiouAEIOU]/g;
let count = 0;
while (count < cadenaText.length) {
    count++;
    if (regex.test(cadenaText[count])){
        numeroDeVocales++;
    }
}

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numerosArray = [1, 2, 3, 4, 5, 6];
let totalArrayNums = 1;
for (const numbers of numerosArray) { totalArrayNums *= numbers }

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 0; i <= 10; i++) {
    let five = 5;
    console.log(`${five} x ${i} = ${five * i}`)
}

// 8. Usa un bucle para invertir una cadena de texto
let myCadena = 'Soy José Omar Rosado Bueno'
let myCadenaInvertida = '';
for (let i = myCadena.length - 1; i >= 0; i--) {
    myCadenaInvertida += myCadena[i];
}
console.log(myCadenaInvertida)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let a = 0;
let b = 1;
let fibonacci = [a, b];

for (let i = 2; i < 10; i++) {
    let siguienteNumero = a + b;
    fibonacci.push(siguienteNumero); 
    a = b;
    b = siguienteNumero;
}

console.log(fibonacci);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
const numerosMayores = [21, 12, 6, 3, 78, 9, 45, 62, 17];
const mayoresDiez = [];
for (const number of numerosMayores) {
    if (number > 10) { mayoresDiez.push(number) }
}
