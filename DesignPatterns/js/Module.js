

/*sintaxis antigua de modulo */
const modulo1 = (function(){

    const nombre = 'sergio'
    function hola(){
        console.log ('hola')
    }
    return{
        nombre,
        hola
    }

})();


/*sintaxis nueva de modulo */
const mostrarcliente = nombre=>{
    console.log(nombre)
}

export default mostrarcliente;

