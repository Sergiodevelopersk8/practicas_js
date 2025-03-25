
import{eliminarCita,cargarEdicion} from '../js/funciones.js';
import {contenedor} from '../js/selectores.js';
class UI{
    imprimirAlerta(mensaje,tipo){
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('text-center','alert','d-block','col-12');
    
    //agregar clase en base al tipo de error
    
    if(tipo === 'error') {
        divMensaje.classList.add('alert-danger');
    } 
    else {
        divMensaje.classList.add('alert-success');
    }
    
    
    //mensaje de error
    divMensaje.textContent=mensaje;
    document.querySelector('#contenido').insertBefore(divMensaje,document.querySelector('.agregar-cita'));
    
    //quitar la alerta
    
    setTimeout(()=>{
    divMensaje.remove(); },5000);
    
    }
    
    imprimirCitas({citas}){
    this.limpiarHtml();
    citas.forEach(cita =>{
    const {mascota,propietario,telefono,fecha,hora,sintomas,id}=cita;
    const divCita = document.createElement('div');
    divCita.classList.add('cita','p-3');
    divCita.dataset.id = id;
    
    //scripting de los elementos de la cita
    
    const mascotaParrafo = document.createElement('h2');
    mascotaParrafo.classList.add('card-title','font-weight-bolder');
    mascotaParrafo.textContent = mascota;
    
    const propietarioParrafo = document.createElement('p');
    const telefonoParrafo = document.createElement('p');
    const fechaParrafo = document.createElement('p');
    const horaParrafo = document.createElement('p');
    const sintomasParrafo = document.createElement('p');
    propietarioParrafo.innerHTML = `<span class="font-weight-bolder">Propietario</span>: ${propietario}`;
    telefonoParrafo.innerHTML = `<span class="font-weight-bolder">telefono</span>: ${telefono} `;
    fechaParrafo.innerHTML = `<span class="font-weight-bolder">fecha</span>: ${fecha} `;
    horaParrafo.innerHTML = `<span class="font-weight-bolder">hora</span>: ${hora} `;
    sintomasParrafo.innerHTML = `<span class="font-weight-bolder">sintomas</span>: ${sintomas} `;
    
    
    //boton de eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.classList.add('btn','btn-danger','mr-2');
    btnEliminar.innerHTML='Eliminar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>';
    btnEliminar.onclick = () => eliminarCita(id);
    
    //Añade un boton para editar 
    
    const btnEditar = document.createElement('button');
    btnEditar.classList.add('btn','btn-info');
    btnEditar.innerHTML = 'Editar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';
    btnEditar.onclick = ()=>cargarEdicion(cita);
    
    
    
    //agregar los parrafos al divcita
    divCita.appendChild(mascotaParrafo);
    divCita.appendChild(propietarioParrafo);
    divCita.appendChild(telefonoParrafo);
    divCita.appendChild(fechaParrafo);
    divCita.appendChild(horaParrafo);
    divCita.appendChild(sintomasParrafo);
    divCita.appendChild(btnEliminar);
    divCita.appendChild(btnEditar);
    
    
    //agregar citas
    contenedor.appendChild(divCita);
    })
    }
    limpiarHtml(){
        while(contenedor.firstChild){
    contenedor.removeChild(contenedor.firstChild)
        }
    }
    }

    
    export default UI;