const fs = require('fs');
const { json } = require('stream/consumers');

const objeto = {nombre: "facundo", edad: 22, apellido:"rodriguez"}

const operacionesArchivosAsincrono = async () => {
    try {
        await fs.promises.writeFile('./fs-promesas.json', JSON.stringify(objeto));
        let resultado = await fs.promises.readFile('./fs-promesas.json', 'utf-8');

        console.log(resultado);

        await fs.promises.appendFile('./fs-promesas.json', '\nMas contenido agregado')

         resultado = await fs.promises.readFile('./fs-promesas.json', 'utf-8')

        console.log(resultado);

        // await fs.promises.unlink('./fs-promesas.json')
    } catch (error) {
        console.log(error);
    }
}
operacionesArchivosAsincrono()