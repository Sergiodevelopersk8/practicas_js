/*
iniciarApp();
function iniciarApp() {
    console.log('Iniciando app...');
    segundaFuncion();
}

function segundaFuncion() {
    console.log('desde la segunda funcion');
    
}
*/


function sumar(a,b) {
    return a+b;
}

const resultado = sumar(2,3);

console.log(resultado);


//ejemplo mas avanzado

let total = 0;
function agregaralcarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return total * 1.15;
}

total = agregaralcarrito(300);
total = agregaralcarrito(100);
total = agregaralcarrito(600);
const totalpagar = calcularImpuesto(total);
console.log(`el total a pagar es de ${totalpagar}`);


console.log(total);