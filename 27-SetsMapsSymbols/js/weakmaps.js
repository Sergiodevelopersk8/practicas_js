/**
 * El objeto WeakMap es una colección de pares llave/valor en la que las llaves 
 * deben ser objetos con valores de cualquier tipo de dato en JavaScript,
 *  y el cual no crea fuertes referencias a sus llaves. Es decir, 
 * la presencia de un objeto como llave en un WeakMap no evita que el objeto sea recolectado
 *  como basura
 */

const producto = {
    idProducto: 10
}

const weakmap = new WeakMap();

weakmap.set(producto,'Monitor');
console.log(weakmap.has(producto));
console.log(weakmap.get(producto));
console.log(weakmap.delete(producto));