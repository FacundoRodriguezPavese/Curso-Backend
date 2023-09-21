const timer = () => {
    let contador = 0;


    const timer = setInterval(() => {
        contador++;
        console.log(contador);
        if (contador > 5) {
            clearInterval(timer)
        }
    }, 1000);
}
// console.log('inicio de tarea');
// timer()
// console.log('fin de tarea');


let arreglo = 'hola'

let arreglo2 = 'chau'

console.log(arreglo + arreglo2);