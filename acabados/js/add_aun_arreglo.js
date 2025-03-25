const carrito = [];

//definir el producto

const producto = {
    nombre: "Monitor 32 pulgadas",
    precios: 400
}

const producto2  = {
    nombre: "celular",
    precios: 800
}


const producto3  = {
    nombre: "teclado",
    precios: 800
}



carrito.push(producto);
carrito.push(producto2);


//aqui lo agrega al inicio con el producto3
carrito.unshift(producto3);




console.table(carrito);