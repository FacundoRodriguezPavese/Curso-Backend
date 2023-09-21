
// Generar 10.000 numeros aleatorios en el rango del 1 al 20

let objetoResultado = {};

// for (let i = 0; i < 10000; i++) {
//     const numKey = Math.round(Math.random()*20);
    
//     if (objetoResultado[numKey]) {
//         objetoResultado[numKey] =+ 1
//     } else {
//         objetoResultado[numKey] = 1
//     }
// }



for (let i = 0; i < 10000; i++) {
    const randomNumber = Math.round(Math.random()*20);

    if (objetoResultado[randomNumber]) {
        objetoResultado[randomNumber] += 1
    } else {
        objetoResultado[randomNumber] = 1
    }
    
}

console.table(objetoResultado)