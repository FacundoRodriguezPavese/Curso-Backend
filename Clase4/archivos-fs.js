// carpeta llamada: node_modules -> se encuentran todas las dependencias nativas o globales que hayamos intalado
const fs = require('fs');

// Implementacion de archivos de manera sincronica

fs.writeFileSync('./ejemplo.txt', 'Hola Coder, estamos trabajando en un archivo')

if (fs.existsSync('./ejemplo.txt')) {
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')
    console.log(contenido);

    fs.appendFileSync('./ejemplo.txt','\nMás contenido')
    contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')

    console.log(contenido);
    fs.unlink('./ejemplo.txt')
}