"use strict";
const producto = {

    nombre:"monitor",
    precio:300,
    disponible:true

}
//el sellado si se pude modificar el objeto pero no deja agregar ni eliminar
Object.seal(producto);

console.log(producto);

console.log(Object.isSealed(producto));