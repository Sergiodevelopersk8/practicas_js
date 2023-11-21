
//funciones dentro de un objeto
const reproductor = {
 reproducir:function(id){
     console.log(`Reproduciendo canción con el id ${id}`);
 },
 pausar:function(){
     console.log(`pausando...`)
 },
 borrar:function(id){
    console.log(`borrando cancion  ${id} `);
},
crearPlaylist:function(nombre){
    console.log(`creando playlist de ${nombre}`);
},
reproducirPlaylist:function(nombre){

    console.log(`reproducioendo playlist de ${nombre}`);
}  
}

reproductor.reproducir(30);

reproductor.reproducir(20);

reproductor.pausar();

reproductor.borrar(30);

reproductor.crearPlaylist('hip hop');
reproductor.crearPlaylist('rock');
reproductor.reproducirPlaylist('pop');
