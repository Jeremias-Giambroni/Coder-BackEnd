//Modulos nativos de NodeJS

const fs = require('fs')
const crypto = require('crypto')

class UserManager{

    constructor(path){
        this.path = path
    }
    
    async createUser(user){
        if(
            !user.name || 
            !user.lastname || 
            !user.password|| 
            !user.username 
        ){
            return console.log('Incomplete user data');
        }

        const {name, lastname, password, username} = user;
        const users = await this.getUser()    
        const passwordHash = await this.hashPassword(password)
        const newUser = {
            name,
            lastname,
            password : passwordHash,
            username, 

        }

        users.push(newUser);
        await fs.promises.writeFile(this.path, JSON.stringify(users, null, 2), 'utf-8') // Corregido formato JSON
    }

    async getUser(){
        try {
            const result = await fs.promises.readFile(this.path, 'utf-8');
            const users = JSON.parse(result);
            return users
        } catch (error) {
            return []
        }
    }

    async hashPassword(password){ 
        const hash = crypto.createHash('sha256') //Documentación de node, con esto creamos un algoritmo de encriptación
        hash.update(password) //Actualizamos el hash en relación a la password que reciba la función
        const passwordHash = hash.digest('hex') //La transformamos por último en un hexadecimal
        return passwordHash;
    }

    async userValidate(username, password){
        const users = await this.getUser();
        const user = users.find(u => u.username === username);
        if (!user) {
            return console.log('El usuario no existe');
        }
        const bdPassword = user.password;
        const hashPassword = await this.hashPassword(password)
        if (bdPassword === hashPassword) {
            console.log('Logueado correctamente');
        }
        else{
            console.log('la contraseña es incorrecta');
        }
    }
}

const test = async () =>{
    const manager = new UserManager('./user.json'); 
    await manager.createUser({
        name : 'Jeremias',
        lastname : 'Giambroni',
        password : '12345',
        username : 'Jeremoyas'
    })

    await manager.createUser({
        name : 'Sergio',
        lastname : 'Sosa',
        password : '54321',
        username : 'SergioSosa'
    })

    console.log('Usuario: Jeremoyas / Contraseña: 12345'); //correcto
    await manager.userValidate('Jeremoyas', '12345')

    console.log('Usuario: SergioSosa / Contraseña: doremi'); //incorrecto
    await manager.userValidate('SergioSosa', 'doremi')
}

test();