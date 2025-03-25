
/*clase padre */
export class Persona{

    //constructor
    constructor(nombre,email){
    this.nombre = nombre
    this.email = email

    } 
}

/*clase abstracta */
class Cliente extends Persona{
    constructor(nombre, email, empresa){
        super(nombre,email)
        this.empresa = empresa;
    }
} 

const cliente = new Cliente('Sergio', 'skate@email.com','skatedev');
const nombrep = ` ${cliente.nombre}`;
const emailp = ` ${cliente.email}`;
const empresap = ` ${cliente.empresa}`;





 








