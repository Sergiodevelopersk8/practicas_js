
let instancia = null;

class Persona{
    constructor(nombre,email){
        
     if(!instancia){
        this.nombre = nombre;
        this.email = email;
        instancia = this;
     }
     else{
        return instancia;
     }
    }
}

const persona = new Persona('sergio','correo@correo.com');


const patron = document.querySelector('.parrafo');
const nombrep = ` ${persona.nombre}`;
const empresap = ` ${persona.email}`;

var arrays = [nombrep,empresap];

for(var i = 0; i < arrays.length; i++){
    
    console.log(arrays[i]);
     const texto = document.createTextNode(arrays[i]);
     patron.appendChild(texto);

}
