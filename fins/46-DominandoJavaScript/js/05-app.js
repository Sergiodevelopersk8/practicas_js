//explicit binding...

function persona(el1,el2){
alert(`Mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`);

}


const informacion = {
    nombre:'sergio'
}

const musica = ['hip hop', 'rock'];

// se pasa elementos del arrgloe
persona.call(informacion, musica[0], musica[1]);


//  toma todo el arrglo
persona.apply(informacion, musica);


const nuevafn = persona.bind(informacion, musica[0], musica[1]);

nuevafn();






