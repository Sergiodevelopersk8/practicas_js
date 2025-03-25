const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);
function obtenerDatos(){

    const url = ' https://picsum.photos/list';
    fetch(url).then(respuesta =>{
        return respuesta.json();
    }).then(resultado =>{
        mostrarhtml(resultado);
    })
}

function mostrarhtml(datos){
    const contenido = document.querySelector('#contenido');
    let html = '';
datos.forEach(perfil => {
    const {author,post_url} = perfil;

    html+= `
    <p>Autor: ${author}</p>
    <a href="${post_url}" target ="_blank"> Ver imagen</a>
    
    
    
    `;


});
contenido.innerHTML = html;
}