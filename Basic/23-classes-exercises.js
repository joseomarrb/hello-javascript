/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class firstClass {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    props() {
        // 2
        return `${this.name} ${this.lastName} ♥`
    }

    static datos(a, b) {
        // 4
        return a + b
    }
};

// 2. Añade un método a la clase que utilice las propiedades

// 3. Muestra los valores de las propiedades e invoca a la función
const instanciaFirstClass = new firstClass('José Omar', 'Rosado Bueno');
console.log(instanciaFirstClass.props());

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático
console.log(firstClass.datos(10, 20));

// 6. Crea una clase que haga uso de herencia
class herencia extends firstClass {
    props() {
        // 10
        return `Metodo Modificado ♥`
    }

    output() {
        return `Esta es una clase herenciada`
    }
}

// 7. Crea una clase que haga uso de getters y setters
class getAndSet {
    // 8
    #addrees
    
    constructor(name, lastName, city, address) {
        this.name = name;
        this.lastName = lastName;
        this.city = city;
        this.#addrees = address;
    }

    get data() {
        // 9
        return `${this.name} ${this.lastName}, Ciudad ${this.city}`
    }

    set modifyAddress(address) {
        this.#addrees = address;
    }
}

const datas = new getAndSet('Liz', 'Santiago', 'Santo Domingo', 'Mega Centro');
console.log(datas.data);
datas.modifyAddress = 'San Isidro';

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 