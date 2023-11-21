import Citas from '../classes/Citas.js';
import UI from '../classes/UI.js';

import {
    mascotaimput,
    propietarioimput, 
    telefonoimput,
    fechaimput, 
    horaimput, 
    sintomasimput, 
    formulario} from '../js/selectores.js';

const ui = new UI();
const administrarCitas = new Citas();
let editando = false;

// objeto
const citaObj={
    mascota : '',
    propietario : '',
    telefono : '',
    fecha : '',
    hora: '',
    sintomas:''
    }


    // agrega datos al objeto 
export function datosCita(e){
    citaObj[e.target.name] = e.target.value;
    
    }

    // carga los datos y la edicion 
export function cargarEdicion(cita){


    const {mascota,propietario,telefono,fecha,hora,sintomas,id}= cita;
    
    //llenar los imputs
    
    mascotaimput.value = mascota;
    propietarioimput.value = propietario;
    telefonoimput.value = telefono;
    fechaimput.value = fecha;
    horaimput.value = hora;
    sintomasimput.value = sintomas;
    
    
    //llenar  el objeto
    
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;
    
    
    
    //cambiar el texto del boton
    formulario.querySelector('button[type="submit"]').textContent='Guardar Cambios';
    editando = true;
    }

    
// valida y agrega una nueva cita a la clase de citas

export function nuevaCita(e){
    e.preventDefault();
    
    // extraer la información del objeto de cita
    
    const {mascota,propietario,telefono,fecha,hora,sintomas}= citaObj;
    
    // validar
    if(mascota === '' || propietario ==='' || telefono==='' || fecha==='' || hora==='' || sintomas===''){
    ui.imprimirAlerta("todos los campos son obligatorios",'error');
    return;
    }
    
    if(editando){
     
    //mensaje de agregado correctamente
    ui.imprimirAlerta('Editado correctamente');
    //pasar el objeto a la edicion
    administrarCitas.editarCita({...citaObj});
    
    //regresar el texto del boton a su texto original
    formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';
    
    
    //quitar el modo edicion
    editando = false;
    
    }
    else{
       
    //generar un id unico
    citaObj.id = Date.now();
    
    // creando una nueva cita
    administrarCitas.agregarCita({...citaObj});
    
    //mensaje de agregado correctamente
    ui.imprimirAlerta('Se agrego correctamente');
    }
    
    
    //reiniciar el objeto para la validacion
    reiniciarObjeto();
    //reiniciar el formulario
    formulario.reset();
    
      //mostrar el html de las citas
    
      ui.imprimirCitas(administrarCitas);
    
    
    }
    
   export function reiniciarObjeto(){
        citaObj.mascota = '';
        citaObj.propietario = '';
        citaObj.telefono = '';
        citaObj.fecha = '';
        citaObj.hora = '';
        citaObj.sintomas = '';
    }
    
 export   function eliminarCita(id){
        //eliminar cita 
    
    administrarCitas.eliminarCita(id);
        //muestre un mensaje 
         ui.imprimirAlerta("La cita se elimino correctamente");
    
    
        //refrescar las citas
        ui.imprimirCitas(administrarCitas);
    }
    
    