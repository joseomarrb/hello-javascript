/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let suma = 5;
let resta = 5;
let multiplicacion = 5;
let division = 5;
let modulo = 15;
let potencia = 15;
let incremento = suma++;
let decremento = suma--;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let a = 2, b = 10, c = 5, d = 8, e = 65;
suma += a;
resta -= b;
multiplicacion *= e;
division /= a;
potencia **= d;

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(15 > 10);
console.log(80 >= 80);
console.log(true === true);
console.log(false === false);
console.log('HOLA' == 'HOLA');

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(101 < 10);
console.log(20 >= 80);
console.log(false === true);
console.log(false !== false);
console.log('' == 'true');

// 5. Utiliza el operador lógico and
console.log(101 < 10 && 80 > 12);
console.log(200 >= 80 && true === true);
console.log(false === true && '' == false);
console.log(false !== false && 9 !== 5);
console.log('false' == 'false' && 9 == '9');

// 6. Utiliza el operador lógico or
console.log(101 < 10 || 80 > 12);
console.log(200 >= 80 || true === true);
console.log(false === true || '' == false);
console.log(false !== false || 9 !== 5);
console.log('false' == 'false' || 9 == '9');

// 7. Combina ambos operadores lógicos
console.log(94 < 100 && 'NADA' === 20 || 14 < 92);
console.log(200 === 200 && 2 + 2 === 4 || false !== true);
console.log('STRING' !== 'STRING' || true !== false && 90 > 15);


// 8. Añade alguna negación
console.log(!(true == true));
console.log(!(69 > 4));
console.log(!(false === true));

// 9. Utiliza el operador ternario
let verdadero = true, falso = false;
verdadero ? console.log('El verdadero es verdadero') : console.log('Es verdadero es falso');
falso ? console.log('El falso es verdadero') : console.log('El falso es falso');

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log(200 + 150 === 350 && 2 <= 2 || 'false' != 'true');
console.log(10 > 8 && 'Omar' !== 2 || 8 + 8 !== 14);
console.log(true === false && 52 / 2 === 26 && 2 < 8);