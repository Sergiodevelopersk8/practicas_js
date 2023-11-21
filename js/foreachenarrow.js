const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'tele 20 px', precio: 50},
    {nombre: 'pc  ', precio: 100},
    {nombre: 'laptop', precio: 700},
    {nombre: 'tablet', precio: 10}

];

const nuevoArreglo = carrito.map((producto) =>{
    return `${producto.nombre} - precio: ${producto.precio}`;
});

const nuevoArreglo2 = carrito.forEach((producto)=>{
    console.log( `${producto.nombre} - precio: ${producto.precio}`);
});

console.log(nuevoArreglo);
