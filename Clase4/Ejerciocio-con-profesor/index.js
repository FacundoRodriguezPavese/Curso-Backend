const { UserManager } = require("./managers/UserManager");

const manager = new UserManager('./Clase4/Entregable2/files/Usuario.json');

const env = async () => {
    const usuarios = await manager.getUsers();
    console.log(usuarios);

    const user = {
        nombre: 'Lucas',
        apellido: 'Paz',
        edad: 20,
        curso: 'Backend'
    }

    await manager.createUser(user)

    const usuariosResultado = await manager.getUsers()
    console.log(usuariosResultado);
}

env();