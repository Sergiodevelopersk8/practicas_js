/**
 * permite crear una propiedad unica 
 * y no se repite
 * Symbol es un objeto incorporado cuyo constructor devuelve un symbol primitivo  
 * también llamado Symbol value o simplemente Symbol 
 *  que está garantizado que sea único
 */
const sym =  Symbol();
const sym2 =  Symbol();

if(sym === sym2){
    console.log('son iguales');
}
else{
    
    console.log('son diferentes');
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {

}
persona[nombre] = 'Sergio';
persona[apellido] = 'Merino';
persona.tipoCliente = 'Premium';
persona.saldo = 500;
console.log(persona);
/**Asi se accede a una popiedad en lugar como comunmente se accede que es persona.nombre debe ser persona[nombre] */
console.log(persona[nombre]);


/**las propiedades que usan symbol no se pueden iterar */

/**const nombreCliente=Symbol('Nombre del cliente'); aqui solo  se usa como descipcion 'Nombre del cliente' */
const nombreCliente=Symbol('Nombre del cliente');

const cliente = {};

cliente[nombreCliente] = 'Kiernan shipka';
console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);


