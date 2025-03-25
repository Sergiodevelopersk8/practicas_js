class Persona{

    //constructor
    constructor(nombre,email){
    this.nombre = nombre
    this.email = email

    }
}


const funcionesPersona = {
    mostrarInformacion(){
        console.log(` Nombre persona: ${cliente.nombre} email: ${cliente.email}`);
    }
}


//añadir funcionespersona a la clase persona
Object.assign(Persona.prototype, funcionesPersona)


const cliente = new Persona('sergio', 'correo');

console.log(cliente);
cliente.mostrarInformacion();

