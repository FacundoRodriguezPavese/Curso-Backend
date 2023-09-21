import fs from 'fs';
import crypto from 'crypto';

export default class UserManager {
    constructor(path) {
        this.path = path;
    }

    getUsers = async () => {
        try {
            if (fs.existsSync(this.path)) {
                const data = await fs.promises.readFile(this.path, 'utf-8');
                const users = JSON.parse(data);
                return users
            } else {
                return [];
            }
        } catch (error) {
            console.log(error);
        }
    }

    createUser = async (usuario) => {
        try {
            // 1er punto: obtener todos los usuarios que tenga almacenado hasta el momento.
            const users = await this.getUsers();

            if (users.length === 0) {
                usuario.id = 1;
            } else {
                usuario.id = users[users.length - 1].id + 1;
            }



            // Hashear password:

            usuario.salt = crypto.randomBytes(128).toString('base64');

            usuario.password = crypto.createHmac('sha256', usuario.salt)
                .update(usuario.password).digest('hex')




            users.push(usuario);

            await fs.promises.writeFile(this.path, JSON.stringify(users, null, '\t'))

            return users;

        } catch (error) {
            console.log(error);
            console.log('mi error');
        }
    }
}
