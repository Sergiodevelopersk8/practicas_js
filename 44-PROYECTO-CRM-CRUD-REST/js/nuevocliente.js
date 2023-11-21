(function(){
const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit',validarCliente);

function validarCliente(){
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;
    const empresa = document.querySelector('#empresa').value;
const cliente = {
    nombre,
    email,
    telefono,
    empresa
}
// console.log(Object.values(cliente).every(input => input !== ''));
    if(validar(cliente)){
        console.log("todos los campos son pbligatorios");
    }
    console.log("todos correcto");
    
}

function validar(obj){
    return !Object.values(obj).every(input=> input!=='')
}




})();