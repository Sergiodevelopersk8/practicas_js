// Una función de callback es una función que se pasa a otra función como un argumento, 
// que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción. 
// El ejemplo anterior es una callback sincrónica, ya que se ejecuta inmediatamente.

const paises = [ 'Francia','España', 'Portugal','Australia','Inglaterra'];


function nuevoPais(pais,callback){
    setTimeout(()=>{
paises.push(pais);
callback();

    },2000);
}

function mostrarPaises(){
    setTimeout(()=>{
paises.forEach(pais => {
    console.log(pais);
});
    },1000);
}


mostrarPaises();
nuevoPais("Mexico",mostrarPaises);