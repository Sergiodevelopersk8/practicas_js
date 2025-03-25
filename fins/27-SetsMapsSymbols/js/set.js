
/*
permite crear una lista de valores sin duplicados
*/ 

const carrito = new Set();

carrito.add('camisa');
/*ejemplo camisa de abajo ya no la agrego*/
carrito.add('camisa');
carrito.add('Disco 1');
carrito.add('Disco 2');
carrito.add('Disco 3');

console.log(carrito);
/*EL size es como el length pero se usa en el set */
console.log(carrito.size);

/**comprobar si existe un elemento en el set y es con has  y devuelve true o false*/

console.log(carrito.has('camisa'));

/**Para eliminar se usa delete se regresa true o false */

console.log(carrito.delete('Disco 3'));

console.log(carrito);

/**con clear se vacia todo el carrito */

carrito.clear();
console.log(carrito);

/**Para iterar */
carrito.forEach(producto => {
    console.log(producto)
});


//del siguiente arrglo eliminar lso duplicados

const numero = [10,20,30,40,50,10,20];

const noduplicados = new Set(numero);

console.log(noduplicados);