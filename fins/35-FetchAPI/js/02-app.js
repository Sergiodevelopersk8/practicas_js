const cargarjsonbtn = document.querySelector('#cargarJSON');
cargarjsonbtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
const url = 'data/empleado.json';
    fetch(url).then(respuesta =>{

        return respuesta.json();
    })
.then(resultado=>{
 mostrarHtml(resultado);
})
}

function mostrarHtml({empresa, id, nombre, trabajo}){
const contenido = document.querySelector('#contenido');
contenido.innerHTML = `
<p>Empleado: ${nombre}</p>
<p>empresa: ${empresa}</p>
<p>Trabajo: ${trabajo}</p>


`;

}