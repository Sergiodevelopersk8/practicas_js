function Cliente (nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;

}

const juan = new Cliente('Juan', 500);

function formatearCliente(cliente){
    const {nombre,saldo} = cliente;
    return 'el cliente'+' ' + nombre +' '+ 'tiene un saldo de ' + saldo;
}

console.log(formatearCliente(juan));

function Empresa (nombre,saldo,categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const emp = new Empresa('atlus', 400, 'developer game')

console.log(formatearCliente(emp));