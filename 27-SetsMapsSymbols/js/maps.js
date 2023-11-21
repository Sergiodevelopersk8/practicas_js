/**
 * 
Los maps son listas ordenadas en llave y valor un objeto con una propiedad
map() El método map() crea un nuevo array con los resultados de la llamada a la función 
indicada aplicados a cada uno de sus elementos
 */

const cliente = new Map();

/**Aqui vamos a agregar un valor en lugar de add se usa set */
cliente.set('nombre','Kiernan');
cliente.set('tipo','Premium');
cliente.set('saldo',3000);

console.log(cliente);

console.log(cliente.size);
console.log(cliente.has('nombre'));

/**Obtener un valor  */

console.log(cliente.get('nombre'));

/*Eliminar es igual delete */
console.log(cliente.delete('saldo'));
console.log(cliente.has('saldo'));

/**Limpiar es igual con clear */
console.log(cliente.clear());


const paciente = new Map([['nombre','paciente'],['cuarto','no definido']]);

paciente.set('dr','Dr asignado');
paciente.set('nombre','Landry');

console.log(paciente);

/**Iterando el map */
paciente.forEach(datos =>{
    console.log(datos);
})