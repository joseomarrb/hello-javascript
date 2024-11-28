/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = 'Omar';
if (nombre === 'Omar') {
    console.log(`Mi nombre es Omar`);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = 'omalito', password = 'liz26';

if (usuario === 'omalito' && password === 'liz26') {
    console.log('Tienes Acceso A La Cuenta');
} else {
    console.log('NO Tienes Acceso A La Cuenta');
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let num2 = -2;
if (num2 > 0) {
    console.log(`El número es ${num2} positivo `);
} else if (num2 < 0){
    console.log(`El número es ${num2} negativo `);
} else {
    console.log(`El número es ${num2} cero `);
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 5;
if (edad >= 18) {
    console.log(`Si puedes votar.`)
} else {
    console.log(`No puedes votar, te faltan ${18 - edad} años.`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let message = edad >= 18 ? 'Adulto' : 'Menor';
console.log(message);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 'Noviembre';
if (mes == 'Marzo' || mes == 'Abril' || mes == 'Mayo') {
    console.log('Estamos en primavera');
} else if (mes == 'Junio' || mes == 'Julio' || mes == 'Agosto') {
    console.log('Estamos en verano');
} else if (mes == 'Septiembre' || mes == 'Octubre' || mes == 'Noviembre') {
    console.log('Estamos en otoño');
} else if (mes == 'Diciembre' || mes == 'Enero' || mes == 'Febrero') {
    console.log('Estamos en invierno');
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes == 'Enero' || mes == 'Marzo' || mes == 'Julio' || mes == 'Agosto' || mes == 'Mayo' || mes == 'Octubre'|| mes == 'Noviembre') {
    console.log('El mes tiene 31 días');
} else if ( mes == 'Abril' || mes == 'Junio' || mes == 'Septiembre' || mes == "Noviembre") {
    console.log('EL mes tiene 30 dias');
} else if (mes == 'Febrero') {
    console.log('El mes tiene 28 días');
} else {
    console.log('Mes incorrecto');
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = 'Ingles';

switch (idioma) {
    case 'Español':
        console.log('Hola! Cómo estás?');
        break;
    case 'Ingles':
        console.log('Hello! How are you?');
        break;
    case 'Frances':
        console.log('Bonjour comment allez-vous?');
        break;
    case 'Portugues':
        console.log('Olá, como vai?');
        break;
    default:
        console.log('Intenta con otro idioma');
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (mes) {
    case 'Abril':
    case 'Marzo':
    case 'Mayo':
        console.log('PRIMAVERA');
        break;
    case 'Junio':
    case 'Julio':
    case 'Agosto':
        console.log('VERANO');
        break;
    case 'Septiembre':
    case 'Octubre':
    case 'Noviembre':
        console.log('OTOÑO');
        break;
    case 'Diciembre':
    case 'Enero':
    case 'Febrero':
        console.log('INVIERNO');
        break;
    default:
        console.log('Intenta nuevamente');
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes) {
    case 'Enero':
    case 'Marzo':
    case 'Julio':
    case 'Agosto':
    case 'Mayo':
    case 'Octubre':
            console.log('31 días');
            break;
    case 'Junio':
    case 'Abril':
    case 'Septiembre':
    case 'Noviembre':
        console.log('30 días');
        break;
    case 'Febrero':
        console.log('28 días');
        break;
    default:
        console.log('Intenta nuevamente');
}