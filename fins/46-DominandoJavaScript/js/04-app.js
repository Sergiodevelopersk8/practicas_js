//implicit binding

const usuario = {
    nombre:'sergio',
    edad:27,
    informacion(){
        alert(`Mi nombre es ${this.nombre} y mi edad es ${this.edad} `);
    },
    mascota:{
        nombre:'kitty',
        edad:1,
        informacion(){
            alert(`Mi nombre es ${this.nombre} y mi edad es ${this.edad} `);
        }
    }
}


usuario.informacion();
usuario.mascota.informacion();