console.log('hola estoy en script 2');
let paises = [];

function nuevosPais(pais,callback){
    paises.push(pais);
    console.log(`Agregado ${pais}`);
    callback();
}
function mostrarPaises(){
    
    console.log(paises);
}
function iniciarCallbackHell(){
setTimeout(()=>{
nuevosPais('Almania', mostrarPaises);

setTimeout(()=>{
    nuevosPais('Mexico', mostrarPaises);

},3000);
setTimeout(()=>{
    nuevosPais('Japon', mostrarPaises);

},3000);


},300);


}

iniciarCallbackHell();