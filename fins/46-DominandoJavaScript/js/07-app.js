
// event loop, loop de eventos 

console.log('primero');

setTimeout(() => {
    console.log("segundo");
}, 0);

console.log('tercero');

setTimeout(() => {
    console.log("cuarto");
}, 0);



new Promise(function(resolve){
    resolve('Desconocido...')
}).then(console.log)

console.log('ultimo');


function hola(){
    console.log("hola");
}

hola();