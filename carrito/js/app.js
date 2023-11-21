const carrito = document.querySelector('#carrito');
const contenedorCarrito= document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listasCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
    //cuando agregas un curso presionando "agregar al carrito"
listasCursos.addEventListener('click',agregarCurso);

//elimina cursos del carrito 
carrito.addEventListener('click', eliminarCurso);

//mostrar los cursos del local storage

document.addEventListener('DOMContentLoaded',()=>{
    articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carritoHtml();
});

//vaciar carrito
vaciarCarritoBtn.addEventListener('click',()=>{
    articulosCarrito = [];
    limpiarHtml();//eliminamos todo el html
})

}

//funciones

function agregarCurso(e){
    e.preventDefault();
   if(e.target.classList.contains('agregar-carrito')){
   const cursoSeleccionado = e.target.parentElement.parentElement;
       leerDatosCurso(cursoSeleccionado);
   }
}


//eliminar curso

function eliminarCurso(e) {
   if(e.target.classList.contains('borrar-curso')){
      const cursoId = e.target.getAttribute('data-id');
      //elimina del arreglo por el data id
  articulosCarrito = articulosCarrito.filter(curso => curso.id != cursoId);
  carritoHtml();
}
        
  //limpiarHtml();
   }
 


//experimento mio de eliminar con un for normal
/*
function eliminarCurso(e) {
   if(e.target.classList.contains('borrar-curso')){
      const cursoId = e.target.getAttribute('data-id');
      //elimina del arreglo por el data id
  //    articulosCarrito = articulosCarrito.filter(curso => curso.id != cursoId);
  for(var i=0; i<articulosCarrito.length;i++){
   if(articulosCarrito[i].id == cursoId){
    carritoHtml();
}
          console.log(articulosCarrito[i]);
  //limpiarHtml();
   }
  }
 
   }
*/

 


//Lee el contenido del html al que le dimos click  y extrae información del curso

function leerDatosCurso(curso){
    //console.log(curso);

    //crear un objeto con el contenido del curso actual

const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo:curso.querySelector('h4').textContent,
    precio:curso.querySelector('.precio span').textContent,
    id:curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
}


//Revisa si un elemento ya existe en el carrito

const existe = articulosCarrito.some(curso => curso.id == infoCurso.id);
if(existe){
    //actualiza la cantidad
const cursos = articulosCarrito.map(curso =>{
    if(curso.id == infoCurso.id){
        curso.cantidad++;
        return curso; //este retorna el objeto actualizado
    }
    else{
        return curso; //este retorna los objetos que no son los duplicados pero siguen siendo importantes
    }
});

articulosCarrito=[...cursos];

}
else 
{
    //agrega el curso al carrito
    articulosCarrito = [...articulosCarrito, infoCurso]
    console.log(articulosCarrito);
}
//agregegar elementos al arreglo de carrio



carritoHtml();
}


//Muestra el carrito de compras en html
function carritoHtml() {

//limpia el html
limpiarHtml();
//recorre el carrito
    articulosCarrito.forEach(curso =>{
const {imagen,titulo,precio,cantidad,id} = curso;
const row = document.createElement('tr');
row.innerHTML=`
<td><img src="${imagen}" width="100"></td>
<td>${titulo}</td>
<td>${precio}</td>
<td>${cantidad}</td>
<td><a href="#" class="borrar-curso" data-id="${id}"> X </a></td>
`;

//agregar el html del carrito en el tbody

contenedorCarrito.appendChild(row);

    });
    //agregar carrito de compras a storage 

sincronizarStorage();

}

function sincronizarStorage(){
    localStorage.setItem('carrito',JSON.stringify(articulosCarrito));
}

//elimina los cursos del body

function limpiarHtml() {
    //forma lenta
    //contenedorCarrito.innerHTML='';


    //forma rapida
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
    
}
function limpiarHtml2(id) {
    //forma lenta
    //contenedorCarrito.innerHTML='';


    //forma rapida
   id= contenedorCarrito;
   id.innerHTML='';
    
}
