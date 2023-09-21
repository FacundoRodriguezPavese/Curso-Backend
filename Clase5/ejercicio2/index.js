import UserManager from "./managers/UserManager.js";

const manager = new UserManager('./Clase4/Entregable2/files/Usuario.json');

const env = async () => {
    const usuarios = await manager.getUsers();
    console.log(usuarios);

    const user = {
        nombre: 'Facundo',
        apellido: 'Rodriguez',
        usuario: 'frpavese',
        password: '1234'
    }

    await manager.createUser(user)

    const usuariosResultado = await manager.getUsers()
    console.log(usuariosResultado);
}

env();