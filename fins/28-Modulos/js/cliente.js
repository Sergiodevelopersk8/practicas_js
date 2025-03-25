/**
Una expresión de función invocada inmediatamente es un lenguaje de programación que 
produce un alcance léxico utilizando el alcance de la función. 
Fue popular en JavaScript como un método para admitir la programación 
modular antes de la introducción de soluciones más estandarizadas, como los módulos CommonJS y ES. 
*/
// (function(){
// console.log('Desde un IIFE');

// window.nombreCliente = 'Sergio';
// })();

export const nombreCliente = 'Sergio';
export const ahorro = 200;

export function mostrarInformacion(nombre,ahorro){
return `Cliente:${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro){
    if(ahorro > 0){
        console.log('si tienes saldo');
    }
    else{
        console.log('El cliente no tiene saldo');
    }
}

export class Cliente{
    constructor (nombre,ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion(){
        return `Cliente:${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}

export default function nuevaFuncion(){
    console.log('este es el export default');
}
