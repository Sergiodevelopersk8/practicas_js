let DB;


document.addEventListener('DOMContentLoaded', () =>{
crmDB();

setTimeout(() => {
crearCliente();
},5000)

});


function crmDB(){
    //crear base de datos version 1.0
    let crmDB = window.indexedDB.open('crm',1);
    
    //si hay error
crmDB.onerror = function (){
    console.log('hubo un error a la hora de crear la bd');
}

    //si se creo bien
crmDB.onsuccess = function(){
    console.log("base de datos creada");
    DB = crmDB.result;
}

//Configuracion de la base de datos

crmDB.onupgradeneeded = function (evento){
    const db = evento.target.result;

    const objecStore = db.createObjectStore('crm',{
        keyPath:'crm',
        autoIncrement:true
    });
//definir las columnas
objecStore.createIndex('nombre','nombre',{unique:false});
objecStore.createIndex('email','email',{unique:true});
objecStore.createIndex('telefono','telefono',{unique:false});

console.log('columnas creadas');

}



}

function crearCliente(){
let transaction = DB.transaction(['crm'],'readwrite');

transaction.oncomplete = function(){
    console.log('transaccion completa');
}
transaction.onerror = function (){
    console.log('hubo un error en la transaccion');
}

const objectStore = transaction.objectStore('crm');
const nuevoCliente = {
telefono:19009120,
nombre:'sergio',
email:'correo@correo.com'
}

const peticion = objectStore.add(nuevoCliente);
console.log(peticion);

}