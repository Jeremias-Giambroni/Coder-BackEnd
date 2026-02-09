//FS con PROMISES

const fs = require('fs');

const operacionesAsincronas = async () =>{
    try {
        await fs.promises.writeFile('/fsPromises.txt','Hola desde promises', 'utf-8');
        let resultado = await fs.promises.readFile('/fsPromises.txt', 'utf-8');
        console.log(resultado);
        await fs.promises.appendFile('/fsPromises.txt', ' más data desde append', 'utf-8');
        resultado = await fs.promises.readFile('/fsPromises.txt', 'utf-8');    
        console.log(resultado);
        //fs.promises.unlink('/fsPromises.txt')  --> Para borrar el archivo 
    } catch (error) {
        console.log(error);
    };
};

operacionesAsincronas()