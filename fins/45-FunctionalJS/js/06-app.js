/*composition*/

const obtenerNombre = info =>({
mostrarNombre(){
    console.log( `Nombre: ${info.nombre} `);
}
})



const guardarEmail = info =>({
    agregarEmail(email){
    console.log( `Guardando email en : ${info.nombre} `);
    info.email = email;
}
})

const obtenerEmail = info=>({
    mostrarEmail(){

        console.log(`Correo: ${info.email}`);
    }
})

const obtenerEmpresa  = info =>({
    mostrarEmpresa(){
        console.log(`Empres: ${info.empresa}`);
    }
})


const obtenerPuesto  = info =>({
    mostrarPuesto(){
        console.log(`puesto: ${info.puesto}`);
    }
})

function Cliente(nombre,email,empresa){

    /*objeto ->*/ let info = {
    
        nombre,
        email,
        empresa
    
        }
    
        return Object.assign(
            info,
            obtenerNombre(info),
            guardarEmail(info),
            obtenerEmail(info),
            obtenerEmpresa(info)
        )
        
    }

function Empleado (nombre, email,puesto){
    
    /*objeto ->*/ let info = {
        
        nombre,
        email,
        puesto
        
    }
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )

}

const cliente = Cliente('Sergio','Sergio@correo.com', 'dev gamer');
cliente.mostrarNombre();
cliente.agregarEmail('correocli2@correo.com');
cliente.mostrarEmail();
cliente.mostrarEmpresa();

const empleado = Empleado('Abby','donellie@correo.com', 'actress');
empleado.agregarEmail('correo2empleado@mail.com');
empleado.mostrarNombre();
empleado.mostrarEmail();
empleado.mostrarPuesto();
