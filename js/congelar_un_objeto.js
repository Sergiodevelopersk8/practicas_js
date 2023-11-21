"use strict";
const producto = {

    nombre:"monitor",
    precio:300,
    disponible:true

}
//aqui se congela el objeto para que no se modifique
Object.freeze(producto);

//producto.disponible = false;
//producto.imagen = "imagen1.jpg";
console.log(Object.isFrozen(producto));
console.log(producto);