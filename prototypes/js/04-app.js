function Cliente (nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;

}


Cliente.prototype.tipoCliente = function (){
   let tipo;
   if(this.saldo > 10000){
       tipo = 'gold';
   }
   else if (this.saldo > 5000){
       tipo = 'platino';
   }
   else{
       tipo = 'normal';
   }
   return tipo;
}


Cliente.prototype.nombreClienteSaldo = function (){
    return 'nombre' + ' ' + this.nombre + ' '+'Saldo'+' ' + this.saldo + ' '+ 'Tipo de cliente'+' '+ this.tipoCliente();
}


Cliente.prototype.retirarSaldo = function (retirar){
this.saldo -= retirar;
}



function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
   
}

Persona.prototype = Object.create(Cliente.prototype)


Persona.prototype.constructor = Cliente;
//  ``

//instancia



const sergio = new Persona('Sergio', 6000,22222);

console.log(sergio);

// const pedro = new Cliente('pedro', 6000);
// pedro.tipoCliente();
// console.log(pedro.tipoCliente());

// console.log(pedro.nombreClienteSaldo());
// pedro.retirarSaldo(1000);
// console.log(pedro.nombreClienteSaldo());


