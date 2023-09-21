const http = require('http')

// con el modulo http voy a crear mi primer servidor backend
const server = http.createServer((req, res) => {
    res.end('mi primer hola mundo desde el backend #2');
});

// Tenemos que levantar el servidor en algun puerto en especifico
server.listen(8080, () => {
    console.log('Listening on port 8080');
});
