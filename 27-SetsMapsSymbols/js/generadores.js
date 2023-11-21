/**
 Para distinguir un generador en la funcion antes del nombre llevara un asterisco *

Descripción. Los generadores son funciones de las que se puede salir y volver a entrar. 
Su contexto (asociación de variables) será conservado entre las reentradas. 
La llamada a una función generadora no ejecuta su cuerpo inmediatamente; 
se devuelve un objeto iterador para la función en su lugar.


 */


function *crearGenerador(){
yield 1;
yield 'Sergio';
yield 3*3;
yield true;
}

// const iterador =  crearGenerador();

// console.log(iterador);
// console.log(iterador.next().value);
// console.log(iterador.next().done);
// console.log(iterador.next().value);
// console.log(iterador);



//generador para carriot de compras

function *generadorcarrito(carrito){
for(let i = 0; i < carrito.length;i++){
yield carrito[i];
}
}



const carrito = ['Producto 1','Producto 2','Producto 3'];
const iterador = generadorcarrito(carrito);

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());