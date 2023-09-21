const { error } = require('console')
const fs = require('fs')

fs.writeFile('./archivo-cb.txt','Hola mundo estoy trabajando en un archivo con Callbacks',
error => {
    if (error) {
        throw new Error(Error `en la creacion del archivo ${error}`)
    }

    fs.readFile('./archivo-cb.txt','utf-8', (error, contenido) => {
        if (error) {
            throw new Error(Error `en la lectura del archivo ${error}`)
        }

        console.log(contenido);

        fs.appendFile('./archivo-cb.txt','\nNuevo contenido', (error, contenido) => {
            if (error) {
                throw new Error(Error `en la actualizacion del archivo ${error}`)
            }

            fs.readFile('./archivo-cb.txt','utf-8', (error, contenido) => {
                if (error) {
                    throw new Error(Error `en la lectura del archivo ${error}`)
                }

                console.log(contenido);

                fs.unlink('./archivo-cb.txt',error => {
                    if (error) {
                        throw new Error(Error `en la eliminacion del archivo ${error}`)
                    }
                })
            })
        })
    })
})
