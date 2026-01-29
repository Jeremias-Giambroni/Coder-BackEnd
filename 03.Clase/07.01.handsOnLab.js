//Registrador de tickets de eventos
/*Se creara una clase que permitirá llevar una gestion 
completa de usuarios que deseen acceder a dichos eventos */

class TicketManager{
    
    #precioBaseDeGanancia = 1.15; //valor * 1.15 = valor mas el %15

    constructor(){
        this.eventos = [];
    }

    getEventos(){
        return this.eventos;
    }

    agregarEventos(nombre, lugar, precio){

        let id_evento = this.eventos.length;
        
        let evento = {
            nombre : nombre,
            lugar : lugar,
            precio : precio * this.#precioBaseDeGanancia,
            capacidad : 50,
            fecha : Date(),
            participantes : [],
            id : ++id_evento //lo sumo por que el array inicializa en 0 
            
        }
        this.eventos.push(evento);
        return this.eventos;
    }

    traerEvento(eventoId){
        let evento = this.eventos.find(elemento => elemento.id == eventoId) //.find -> asigna a la variable evento el primer elemento del array que cumpla con la caracteristica de la función del .find en este caso elemento.Id (iterador que recorre cada elemento del objeto especificamente el valor de la key id) == eventoId (parametro que le enviamos)
        if (evento){
            return evento
        }else{
            return null
        }
    }

    agregarUsuario(id_evento, id_usuario){
        const evento = this.traerEvento(id_evento) //accedo al evento especifico con metodo traerEvento
        if (evento == null) {
            console.log("El evento no existe");
            return false
         }
        if (this.estaRegistrado(id_evento, id_usuario)) {
            evento.participantes.push(id_usuario)
            return true
        }else{
            console.log("La persona ya está registrada");
            return false
        }
    }

    estaRegistrado(id_evento, id_usuario){
        let evento = this.traerEvento(id_evento);
        let registro = evento.participantes.find(idParticipante => idParticipante == id_usuario);
        if(registro === undefined){
            return true
        }else{
            return false
        }
    }

    ponerEventoEnGira(id_evento, nuevaLocalidad, nuevaFecha){
        let evento = this.traerEvento(id_evento);
        let id_nuevoEvento = this.eventos.length;
        if (!evento) {
            return ["El evento no existe"]
        }
        let nuevoEvento = {...evento} //hacemos una copia del evento anterior pero modificamos localidad, fecha y id
        nuevoEvento.lugar = nuevaLocalidad;
        nuevoEvento.fecha = nuevaFecha;
        nuevoEvento.id = ++id_nuevoEvento;
        this.eventos.push(nuevoEvento);
        return this.eventos;
    }
}

const ticketManager = new TicketManager();

ticketManager.agregarEventos("Baradero Rock", "Baradero,", 1500)
ticketManager.agregarEventos("Lolapalloza", "Tigre,", 3500)

ticketManager.agregarUsuario(1,1)
ticketManager.agregarUsuario(1,2)

ticketManager.agregarUsuario(2,1)
ticketManager.agregarUsuario(2,2)

console.log(ticketManager.getEventos());

ticketManager.agregarUsuario(1,2) // Activa mensaje "La persona ya está registrada"
ticketManager.agregarUsuario(4,3) // Activa mensaje "El evento no existe"

ticketManager.ponerEventoEnGira(2, "Moreno", "02/02/2026") //Copio el evento 2 agregamos un nuevo lugar una nueva fecha, con el "nuevoEvento.id = ++id_nuevoEvento;" se anotara con id 3.

console.log(ticketManager.getEventos());
