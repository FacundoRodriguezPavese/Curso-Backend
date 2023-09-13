// class Persona{
//     constructor(param){
//         console.log("Nuevo objeto creado");
//         this.variableInterna = 10;
//     }

//     static staticVar = 15;

//     metodo1(){
//         console.log("soy el metodo uno");
//     }
//     metodo2 = () => {
//         console.log(`soy una funcion flecha, puedo insertar variables: ${this.variableInterna}`);
//     }
// }


// let persona1 = new Persona();

// console.log(persona1.variableInterna);
// persona1.metodo1();
// persona1.metodo2();


class Contador {
    static contadorGlobal = 0;
    constructor(name, contadorIndividual) {
        this.name = name
        this.contadorIndividual = 0
    }
    sumaIndividual(){
        this.contadorIndividual++;
        Contador.contadorGlobal++
    }
}

const contador1 = new Contador(`Facundo`)
const contador2 = new Contador(`Agus`)

contador1.sumaIndividual();
contador2.sumaIndividual();
contador2.sumaIndividual();
contador2.sumaIndividual();
contador2.sumaIndividual();

console.log(contador1.contadorIndividual);
console.log(contador2.contadorIndividual);
console.log(Contador.contadorGlobal);