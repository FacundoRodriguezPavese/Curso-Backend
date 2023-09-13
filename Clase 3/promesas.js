const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor === 0) {
            reject('No se puede dividir entre 0')
        } else {
            resolve(dividendo / divisor)
        }
    })
}

dividir(10, 2)
    // Manejar el caso de exito de nuestra promesa .then(). Podemos usar cuantos queramos
    .then(resultado => {
        console.log(resultado);
        return resultado
    })
    .then(resultado2 => {
        console.log(resultado2 * 4  );
    })

    // Manejar el caso fallido de nuestra promesa .catch().
    .catch(error => {
        console.log(error);
    })