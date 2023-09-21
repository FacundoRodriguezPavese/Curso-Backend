const suma = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if (numero1 === 0 || numero2 === 0) {
            reject('Operacion innecesaria')
        }
        if (numero1 + numero2 < 0) {
            reject('La calculadora solo puededevolver valores positivos')
        }
        resolve(numero1 + numero2)
    })
}

suma(-5, 2)
    .then(resultado => {
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error);
    })

    const resta = (numero1, numero2) => {
        return new Promise((resolve, reject) => {
            if (numero1 === 0 || numero2 === 0) {
                reject('Operacion invalida')
            }
            if (numero1 - numero2 < 0) {
                reject('La calculadora solo puede devolver valores positivos')
            }
            resolve(numero1 - numero2)
        })
    }

    setTimeout(() => {
        
    }, 1000);