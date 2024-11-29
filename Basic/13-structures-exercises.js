/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let array = ['Perro', 'Gato', 'Buho', 'Serpiente', 'León'];

// 2. Añade dos más. Uno al principio y otro al final
array.push('Anaconda');
array.unshift('Caballo');

// 3. Elimina el que se encuentra en tercera posición
array.splice( 3, 1 )
console.log(array);

// 4. Crea un set que almacene cinco libros
const mySet = new Set(['Don Quijote', 'El Principito', 'El hobbit', 'Ella', 'El codigo DaVinci']);

// 5. Añade dos más. Uno de ellos repetido
mySet.add('La vida es una');
mySet.add('El Principito');

// 6. Elimina uno concreto a tu elección
mySet.delete('Ella');
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre
let mapa = new Map([
    [1, 'Enero'],
    [2, 'Febrero'],
    [3, 'Marzo'],
    [4, 'Abril'],
    [5, 'Mayo'],
    [6, 'Junio'],
    [7, 'Julio'],
    [8, 'Agosto'],
    [9, 'Septiembre'],
    [10, 'Octubre'],
    [11, 'Noviembre'],
    [12, 'Diciembre']
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(mapa.has(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
mapa.set('Verano', ['Junio', 'Julio', 'Agosto']);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let transArray = ['Moure', 'Omalito'];
let transSet = new Set(transArray);
let nuevoMapa = new Map();
nuevoMapa.set('MiSetClave', transSet);