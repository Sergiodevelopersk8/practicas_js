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



let resultado;
resultado = [...carrito, producto];


//aqui se pone al inicio 
resultado=[producto3,...resultado];


console.table(resultado);