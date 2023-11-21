const carrito = [
{nombre: 'Monitor 27 pulgadas', precio:500},
{nombre: 'mouse', precio:1},
{nombre: 'pc', precio:100},
{nombre: 'lap', precio:400},
]


//map llena una variable con nuevo arreglo
    const nuevoArreglo = carrito.map( function (producto) {
       return`${producto.nombre} -Precio: ${producto.precio}`;
    })


 const nuevoArreglo2 = carrito.forEach( function (producto) {
        return`${producto.nombre} -Precio: ${producto.precio}`;
    })

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
