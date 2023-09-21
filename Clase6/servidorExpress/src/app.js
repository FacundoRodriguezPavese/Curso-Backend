import express from "express";

// Creando el servidor http, utilizando express
const app = express()

// Ahora vamos a construir nuestro primer endpoint o sevicio
// Vamos a revisar la preticion http de tipo GET
app.get('/bienvenida', (req, res) => {
    res.send('Hola a todos, este es mi primer endpoint desde express')
})

app.listen(8080)