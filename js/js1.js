/*metodos replace , slice y substring */

const producto = 'Monitor 20 pulgadas';

//replace

console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

//slice para cortar
console.log(producto.slice(0,10));
console.log(producto.slice(8));

//substring
console.log(producto.substring(0,10));

console.log(producto.substring(2,1));
