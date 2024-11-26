/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
// Primer Comentario de una línea.

// 2. Escribe un comentario en varias líneas
/*
Mi comentario de varias lineas
Mi nombre es Omar:)
Estoy aprendiendo JavaScript
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let cadena = 'Hola Mundo!';
let num = 26;
let nulo = null;
let indefinido = undefined;
let simbolo = Symbol('LIZ');
let bigInt = BigInt(6456465487987987987564541206644830149847077074564094);
let bool = true;

// 4. Imprime por consola el valor de todas las variables
console.log(cadena);
console.log(num);
console.log(bool);
console.log(simbolo);
console.log(bigInt);
console.log(indefinido);
console.log(nulo);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof cadena);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof simbolo);
console.log(typeof bigInt);
console.log(typeof indefinido);
console.log(typeof nulo);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
cadena = 'Bye Mundo!';
num = 10;
bool = false;
simbolo = Symbol('ANGELINE');
bigInt = BigInt(98415106565464614626399393);
indefinido;
nulo = null;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
cadena = 2;
num = '10';
bool = 'false';
simbolo = 9;
bigInt = undefined;
indefinido = null;
nulo = 'String';

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const numero = 90;
const string = 'OMALITO "EL NIGA"';
const verdadero = true;
const simbolito = Symbol('AKA');
const sinValor = undefined;
const sinValor2 = null;
const granNum = BigInt(801640498498429492849804984980109806456);

// 9. A continuación, modifica los valores de las constantes
/*
numero = 400;
string = 'NOOOOOOO';
verdadero = false;
simbolito = Symbol(400);
sinValor = 'NO SE SI FUE LA DISTANCIA';
sinValor2 = 9;
granNum = BigInt(8784949232047777706);
*/

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse