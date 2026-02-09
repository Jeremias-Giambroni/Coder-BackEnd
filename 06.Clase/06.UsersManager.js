/**MANAGER DE USUARIOS 
* Se creará una clase que permita gestionar usuarios usando fs.promises,
* este deberá contar solo con dos métodos : Crear un usuario y consultar los usuarios guardados.
*
* El Manager debe vivir en una clase en un archivo externo llamado UsersManajer.js(Como
* el realizado la clase pasada)
* El metodo "Crear usuario" debe recibir un objeto con los campos: 
* Nombre
* Apellido
* Edad
* Curso
*
* El método debe guardar un usuario en un archivo "Usuarios.json" deben guardarlos dentro de un arreglo,
* ya que se trabajaran con multiples usuarios.
*
*El metodo "ConsultarUsuarios" debe poder leer un archivo Usuarios.json y devolver el arreglo
*Correspondiente a esos usuarios
*/

const fs = require('fs');

class UsersManager {
    constructor(path){
        this.path = path
    }

    async crearUsuario(usuario){
        if(!usuario.nombre || !usuario.apellido || !usuario.edad || !usuario.curso){
            return console.error('Usuario incompleto');
        }
        const nuevoUsuario = {
            nombre : usuario.nombre,
            apellido : usuario.apellido,
            edad : usuario.edad,
            curso : usuario.curso
        }
        const usuarios = await this.obtenerUsuarios();
        usuarios.push(nuevoUsuario)
        await fs.promises.writeFile(this.path, JSON.stringify(usuarios), 'utf-8')
    }

    async obtenerUsuarios(){
        try {
            const result = await fs.promises.readFile(this.path, 'utf-8');
            const users = JSON.parse(result)
            return users;
        } catch (error) {
            return []; 
        }
    }
}

const test = async () =>{
    const userManager = new UsersManager('./usuarios.json');
    await userManager.crearUsuario({ //Debemos enviarlo en formato objeto
        nombre : 'Jeremias',
        apellido : 'Giambroni',
        edad : 22,
        curso : 'Backend'
    })
    const users = await userManager.obtenerUsuarios();
    console.log(users);
}

test()  