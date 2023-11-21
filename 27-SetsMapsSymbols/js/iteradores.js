function crearIterador(carrito){
    let i = 0;

    return{
        siguiente: () =>{
            const fin = (i >= carrito.length);
            
/**si no hemos llegado al fin del arreglo que es !fin  entonces ejecuta este codigo que es carrito [i++] 
 * si ya se llego y no hay mas items seria undefined
 * 
*/
const valor = !fin ? carrito[i++] : undefined;
return fin, valor;
        }
    }
}



/***Mi funcion */
function crearIterador1(carrito){
    let i = 0;

    return{
        siguiente: () =>{
            const fin = (i >= carrito.length);
            
var valor;

if(!fin){
    valor = carrito[i++];
}
else{
 
 undefined;
}
return  fin,valor;
}
    }
}

const carrito = ['Producto 1','Producto 2','Producto 3'];

/**Utilizar el iterador */

const  recorrerCarrito = crearIterador(carrito);
const  recorrerCarrito1 = crearIterador1(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());

console.log(recorrerCarrito1.siguiente());
console.log(recorrerCarrito1.siguiente());
console.log(recorrerCarrito1.siguiente());
console.log(recorrerCarrito1.siguiente());