import nuevaFuncion,{nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente} from './cliente.js';
import {Empresa} from './empresa.js';

nuevaFuncion();

// console.log(nombreCliente);
// console.log(ahorro);
console.log(mostrarInformacion(nombreCliente, ahorro));

tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente.mostrarInformacion());

//Importar empresa


const empresa = new Empresa('Kiernan shipka', 100, 'Esposa de Sergio Merino');
console.log(empresa.mostrarInformacion());