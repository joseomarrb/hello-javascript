/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(num1, num2) {
    return num1 + num2;
}

console.log(suma(5, 10));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function numMayorArray(array) {
    let mayor = array[0]
    for (let i = 0; i < array.length; i++) {
        if (mayor < array[i]) {
            mayor = array[i]
        }
    }
    return mayor;
}

console.log(numMayorArray([20, 30, 11, 65, 32]))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function numVocales(string) {
    let numeroVocales = 0;
    let conversionString = string.toLowerCase()
    for (let i = 0; i < conversionString.length; i++) {
        switch (conversionString[i]) {
            case 'a':
                numeroVocales++
                break;
            case 'e':
                numeroVocales++
                break;
            case 'i':
                numeroVocales++
                break;
            case 'o':
                numeroVocales++
                break;
            case 'u':
                numeroVocales++
                break;
            default:
                break;
        }
    }
    return numeroVocales
}

console.log(numVocales('Hola Mundo, Soy Omarucho'));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function arrayStrings(array) {
    let nuevoArray = array.map(string => string.toUpperCase());
    return nuevoArray
}

console.log(arrayStrings(['Hola', 'Omar', 'Practicando', 'Forever JS']));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function primos(numero) {
    if (numero <= 1) { return false } 
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) { return false }
    }
    return true
}

console.log(primos(29));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function elementosComunes(arr1, arr2) {
    let nuevoArray = [];
    arr1.forEach( element => {
        if (arr2.includes(element)) {
            nuevoArray.push(element)
        }
    });
    return nuevoArray;
}
    
console.log(elementosComunes(['Hola', 'Omar', 'Forever JS'], ['Liz', 'Omar', 'Forever JS']));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumaNumerosPares(array) {
    let sumaPares = 0;
    for (const numero of array) {
        if (numero % 2 === 0) {
            sumaPares += numero;
        }
    }
    return sumaPares;
}

console.log(sumaNumerosPares([2, 32, 16, 28, 34, 17, 93, 44]));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function numerosSqrt(array) {
    let numerosCuadraro = array.map( numero => numero ** 2)
    return numerosCuadraro;
}

console.log(numerosSqrt([25, 49, 16, 100, 4, 9, 64]));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function stringInvertido(string) {
    return string.split('').reverse().join('');
}

console.log(stringInvertido('Ella Baila Sola'));

// 10. Crea una función que calcule el factorial de un número dado
function factorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado = i * resultado
    }
    return resultado;
}

console.log(factorial(5));