const producto = {
    nombre:"Monitor de 20 pulgadas",
    precio: 3000,
    disponible:true
}

//Destructing

const {nombre}=producto;

console.log(nombre);


//destructing array

const numeros = [1,2,3,4,5,6];
//se asigna por posiscion 
//const [primero , segundo, tercero]=numeros;

//aqui estoy accediendo (extrayendo) al tercer valor pero sin declarar mas valores por lo que se accede o se salta con comas
const [ , , tercero]=numeros;

console.log(tercero);

