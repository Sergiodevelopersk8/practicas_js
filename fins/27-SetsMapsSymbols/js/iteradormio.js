function crearIterador(carrito){
let i = 0;
var fin;
var valor;
if(i >= carrito.length){
fin = true;
if(fin)
{
undefined;
}
}
else
{
fin = false;
if(!fin){
    valor = carrito[i++];
    }
}



return  fin,valor;
}


const carrito = ['Producto 1','Producto 2','Producto 3'];

const  recorrerCarrito = crearIterador(carrito);
console.log(recorrerCarrito);
console.log(recorrerCarrito);
console.log(recorrerCarrito);
