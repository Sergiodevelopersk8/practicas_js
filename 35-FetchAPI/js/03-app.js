const cargarJSONArraybtn = document.querySelector('#cargarJSONArray');
cargarJSONArraybtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){

    const url =  'data/empleados.json';
    fetch(url).then(respuesta =>{
       return respuesta.json();
        
    }).then(resultado =>{
        mostrarHtml(resultado);
    })
}

function mostrarHtml(empleados){
    const contenido = document.querySelector('#contenido');
    let html = '';
empleados.forEach(empleado => {
    const {id,nombre,empresa,trabajo} = empleado;

    html+= `
    <p>Empleado: ${nombre}</p>
    <p>empresa: ${empresa}</p>
    <p>Trabajo: ${trabajo}</p>
    
    
    `;


});
contenido.innerHTML = html;
}