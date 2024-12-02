/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let myObjeto = {
    nombres: 'José Omar',
    apellidos: 'Rosado Bueno',
    edad: 19,
    datos () {
        return `${this.nombres} ${this.apellidos}`
    }
};

// 2. Accede y muestra su valor
console.log(myObjeto.nombres);
console.log(myObjeto.apellidos);
console.log(myObjeto.edad);

// 3. Agrega una nueva propiedad
myObjeto.actividades = 'Programación, Deportes, Familia'

// 4. Elimina una de las 3 primeras propiedades
delete myObjeto.edad

// 5. Agrega una función e invócala
console.log(myObjeto.datos());

// 6. Itera las propiedades del objeto
for (const prop in myObjeto) {
    console.log(prop, myObjeto[prop]);
}

// 7. Crea un objeto anidado
const objetoAnidado = {
    nombres : 'Liz Angeline',
    apellidos: 'Santiago Checo',
    edad: 18,
    familia : {
        madre : 'Yinaury',
        padre : 'Alexis'
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(objetoAnidado.familia.madre);
console.log(objetoAnidado.familia.padre);

// 9. Comprueba si los dos objetos creados son iguales
console.log(objetoAnidado === myObjeto);

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(objetoAnidado.nombres === myObjeto.nombres);