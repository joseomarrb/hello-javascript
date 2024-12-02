/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [ uno, dos ] = myArray;

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
const [ , , tres = 0, cuatro = 0, cinco = 0] = myArray

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let myObjeto = {
    nombres: 'José Omar',
    apellidos: 'Rosado Bueno',
    edad: 19,
};

const {nombres, apellidos} = myObjeto;

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let car = {
    marca: 'Mustang',
    year: 1998,
};
const { marca : marcas, year : years} = car;

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
const omarObject = {
    nombres: 'José Omar',
    apellidos: 'Rosado Bueno',
    edad: 19,
    familia : {
        madre: 'Apolonia Bueno',
        padre: 'José Osvaldo Rosado',
        hermanoMayor: 'José Oneal Rosado',
        hermanoMenor: 'Oscar José Rosado',
    }
}

const { familia : {madre, padre, hermanoMayor, hermanoMenor} } = omarObject

// 6. Usa propagación para combinar dos arrays en uno nuevo
const segundoArray = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const combinacionArray = [...myArray, ...segundoArray];

// 7. Usa propagación para crear una copia de un array
const nuevoArray = [...myArray];

// 8. Usa propagación para combinar dos objetos en uno nuevo
const nuevoObjeto = {...car, ...omarObject}

// 9. Usa propagación para crear una copia de un objeto
const copiarCar = {...car}

// 10. Combina desestructuración y propagación
const [ , , trece, ...resto ] = segundoArray;
const { marca, year, ...otras } = car;