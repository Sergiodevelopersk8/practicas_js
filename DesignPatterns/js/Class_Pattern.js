


//se define una clase

class Persona{

    //constructor
    constructor(nombre,email){
    this.nombre = nombre
    this.email = email

    }


   
}




//nuevo objeto
const persona = new Persona('sergio','skate@skatemail.com');



const patron = document.querySelector('.parrafo');
const texto = document.createTextNode(` ${persona.nombre}, ${persona.email}`);

patron.appendChild(texto);