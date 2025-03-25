"use strict";
const producto = {

    nombre:"monitor",
    precio:300,
    disponible:true

}

const medida = {
    peso:"15 kg",
    medida:"1m"
}


const resultado = Object.assign(producto,medida);

//spread operator o reset operator

const resultado2= {...producto, ...medida}


console.log(resultado);
console.log(resultado2);

