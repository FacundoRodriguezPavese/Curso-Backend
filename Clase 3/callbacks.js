const num = [1,2,3,4,5];

const numConMap = num.map(valor=>valor + 1)

console.log(numConMap);

const funcionCallback = (valor) => {
    if (valor %2 === 0) {
        return valor        
    } else {
        return 'no es par'
    }
}

const valoresPares = num.map(funcionCallback)

console.log(valoresPares);

const miFuncionMap = (arreglo, callback) => {
    const nuevoArreglo = []
    for (let i = 0; i < arreglo.length; i++) {
        const nuevoValor = callback(arreglo[i]);
        nuevoArreglo.push(nuevoValor)
        
    }
}

const resultadoMapPropio = miFuncionMap(num,x => x*2)