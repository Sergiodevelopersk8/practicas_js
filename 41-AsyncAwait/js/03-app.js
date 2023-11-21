function descargarClientes(){

    return new Promise((resolve,reject)=>{
        const error = false;
    setTimeout(()=>{
        if(!error){
            resolve('el listado de clientes se descargo correctamente');
        }
        else{
            reject('Error al descargar el listado');
        }
    
    },2000)
    })
    }
    
    //async await
    const ejecutar = async() =>{
        try{
            console.log(1+1);
            const respuesta = await descargarClientes();
            console.log(2+2);
    console.log(respuesta);    
    }
        catch(error){
            console.log(`${error}`);
        }
    }
    ejecutar();