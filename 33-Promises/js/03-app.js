console.log('hola estoy en script 3');

const aplicarDescuento = new Promise((resolve, reject)=>{
    let descuento = false;
    if(descuento){
resolve('descuento aplicado');
}
else{
    reject('No se pudo aplicar el  descuento');
    
    }
});

aplicarDescuento.then(resultado =>{
    console.log(resultado);
} ).catch(error =>{
    console.log(error);
} );

// console.log(aplicarDescuento);