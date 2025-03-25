const carrito = [
{nombre: 'Monitor 27 pulgadas', precio:500},
{nombre: 'mouse', precio:1},
{nombre: 'pc', precio:100},
{nombre: 'lap', precio:400},
]

    for(var i=0;i<carrito.length;i++){
    console.log( `${carrito[i].nombre} -Precio: ${carrito[i].precio}` );}

    carrito.forEach( function (producto) {
        console.log(`${producto.nombre} -Precio: ${producto.precio}`);
    })