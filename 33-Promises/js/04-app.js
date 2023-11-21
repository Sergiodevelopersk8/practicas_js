console.log('hola estoy en script 4');
const paises = [];

const nuevosPaises = pais => new Promise(resolve =>{
    setTimeout(()=>{
paises.push(pais);
resolve(`se agrego el nuevo pais que es ${pais}`);
    },3000);
})

nuevosPaises('Japon').then(resultado =>{
    console.log(resultado);
    console.log(paises);
    return nuevosPaises('Mexico');
})
.then (resultado =>{
    
    console.log(resultado);
    console.log(paises);
    return nuevosPaises('Alemania');
})
.then(resultado =>{
    
    console.log(resultado);

})