const carrito =[];

//definir un producto

const producto ={
    nombre: "Monitor 32 pulgadas",
    precio:400
}

const producto2={
    nombre: "Celular",
    precio:800
}

/// .push agregar al final de un arreglo

carrito.push(producto2)
carrito.push(producto);


const producto3={
    nombre:"Teclado",
    precio:50
}

const producto4={
    nombre:"Mouse",
    precio:50
}
carrito.push(producto4);;


carrito.unshift(producto3);



console.table(carrito);

//eliminar ultimo elemento del carrito
//carrito.pop();
//console.table(carrito);


//eliminar del inicio del arreglo
//carrito.shift();
//console.table(carrito);

carrito.splice(1,1);
console.table(carrito);