
//variables
const btnEnviar = document.querySelector('#enviar');
const formulario=document.querySelector('#enviar-mail');
//variables para campos
const email = document.querySelector('#email');
const btnReset = document.querySelector('#resetBtn');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const er= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     



//listeners
eventListeners();
function eventListeners(){
    //cuando la app arranca 
    document.addEventListener('DOMContentLoaded', iniciarApp);
    //campos del formulario
    email.addEventListener('blur', validarFormulario);
     asunto.addEventListener('blur', validarFormulario);
      mensaje.addEventListener('blur', validarFormulario);

      //enviar email
      formulario.addEventListener('submit',enviarEmail);
//resetear form

     btnReset.addEventListener('click',resetform);


}




//funciones
function iniciarApp(){

btnEnviar.disabled = true;
btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}

function validarFormulario(e){

  if(e.target.value.length > 0){
      //eliminar errores
      const error = document.querySelector('p.error');
      if(error){
        error.remove();
      }
      
    e.target.classList.remove('border', 'border-red-500');
    e.target.classList.add('border', 'border-green-500'); 

    
  }

  else{
    e.target.classList.remove('border', 'border-green-500'); 
    e.target.classList.add('border', 'border-red-500');   
    mostrarError('todos los campos son obligatorios'); 
    }
    if(e.target.type == 'email'){
        // const resultado = e.target.value.indexOf('@');
        if(er.test(e.target.value)){
            const error = document.querySelector('p.error');
            if(error){
              error.remove();
            }
        }
        else{
            e.target.classList.add('border','border-red-500');
            mostrarError('Email no valido');
        }
    }

    if(er.test(email.value) && asunto.value !='' && mensaje.value !=''){
      btnEnviar.disabled = false;
      btnEnviar.classList.remove('cursor-not-allowed','opacity-50');
    }

}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent=mensaje;
    mensajeError.classList.add('border','border-red-500','background-red-100','text-red-500','p-3','mt-5','text-center','error');
    const errores = document.querySelectorAll('.error');
    if(errores.length == 0){
        formulario.appendChild(mensajeError);

    }

   }    

   //envia el email

   function enviarEmail(e){
e.preventDefault();
const spiner = document.querySelector('#spinner');
spiner.style.display='flex';

//despues de unos 3 segundos

setTimeout(() => {
  spiner.style.display='none';

//mensaje de que se envio correctamente

const parrafo=document.createElement('p');
parrafo.textContent='El mensaje se envio correctamente';
parrafo.classList.add('text-center','my-10','p-2','bg-green-500','text-white','font-bold','uppercase');
formulario.insertBefore(parrafo,spiner);
setTimeout(() => {
  parrafo.remove();
  resetform();
}, 5000);
}, 3000);
   }


   
   //restear formulario

/*function resetform() {
  //debugger;
email.value = "";
asunto.value = "";
mensaje.value="";
iniciarApp();
 
 }*/

 // Resetear el formulario 
function resetform(e) {
  formularioEnviar.reset();
  e.preventDefault();
}