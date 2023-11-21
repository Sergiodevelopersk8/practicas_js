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




//instancia

const pedro = new Cliente('pedro', 6000);
pedro.tipoCliente();
console.log(pedro.tipoCliente());

console.log(pedro.nombreClienteSaldo());
pedro.retirarSaldo(1000);
console.log(pedro.nombreClienteSaldo());


