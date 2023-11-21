function descargarNuevosClientes(){
    return new Promise(resolve =>{
        console.log('Descargando clientes...');

        setTimeout(()=>{
            resolve('Los clientes fueron descargados ');
        },5000)
    });
}


function descargarNuevosPedidos(){
    return new Promise(resolve =>{
        console.log('Descargando pedidos...');

        setTimeout(()=>{
            resolve('Los pedidos fueron descargados ');
        },3000)
    });
}

const app = async () =>{
try{
// const clientes = await descargarNuevosClientes();
// console.log(clientes);
// const pedidos = await descargarNuevosPedidos();
// console.log(pedidos);

//respuesta mas efeciente en lugar de la de arriba
const respuesta = await Promise.all([descargarNuevosClientes(),descargarNuevosPedidos()]);
console.log(respuesta);

}
catch(error){
    console.log(`Error: ${error}`);
}
}

app();