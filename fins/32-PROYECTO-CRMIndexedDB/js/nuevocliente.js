
(function(){
    let DB;
    const formulario = document.querySelector('#formulario');
 var inputs = document.querySelectorAll('.cajita');
    document.addEventListener('DOMContentLoaded',()=>{
        conectarDB();
        
        formulario.addEventListener('submit',validarCliente);

    });

function conectarDB(){
    const  abrirConexion = window.indexedDB.open('crm',1);

    abrirConexion.onerror = function(){
        console.log('hubo un error');

    };

abrirConexion.onsuccess = function(){
    DB = abrirConexion.result;
}


}


function validarCliente(e){
    e.preventDefault();
    // console.log('validando');
    //inputs
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;
    const empresa = document.querySelector('#empresa').value;
    
    if(nombre === '' || email === '' || telefono === '' || empresa === ''){
        imprimirAlerta('Todos los campos son obligatorios','error');
    return;
}

//objeto con la informacion

const cliente = { 
    nombre,
    email,
    telefono,
    empresa,
    
}
cliente.id = Date.now();

crearNuevoCliente(cliente);

// limpiarinputs(inputs);

}

function crearNuevoCliente(cliente){
    const transaction = DB.transaction(['crm'], 'readwrite');
    
    const objectStore = transaction.objectStore('crm');
    
    objectStore.add(cliente);
    
    transaction.onerror = function () {
    console.log('hubo un error');
    }
    
    
    transaction.oncomplete = function () {
        // console.log('Cliente agregado');
        imprimirAlerta('el cliente se agrego correctamente');
       
        setTimeout(()=>{
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = "";
                
            }
       },3000)
    setTimeout(()=>{
        var continuar = confirm("¿Deseas ver todos los clientes?");
        if (continuar == true) {
            // El usuario seleccionó OK
            window.location.href = 'index.html';
         
        } else {
          // El usuario seleccionó Cancel
          // aqui colocas la accion a realizar
        }
        
    },6000)
    
    
    }
    
    
    
    
    
    }

function imprimirAlerta(mensaje, tipo){
    const alerta = document.querySelector('.alerta');
  
    if(!alerta){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'borde', 'alerta');
    
        if(tipo === 'error'){
            divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
        }
        else {
            divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
        }
    
        divMensaje.textContent = mensaje;
    
    formulario.appendChild(divMensaje);
    
    setTimeout(()=>{
    divMensaje.remove();
    },3000)
    
    }


}



})();


/*




*/