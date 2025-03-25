// api de pixabay -> 39143798-ced9ae8baf2dc7c6fffdbde82

const  resultado = document.querySelector('#resultado');
const  formulario = document.querySelector('#formulario');
const  paginaciondiv = document.querySelector('#paginacion');
const registroporPagina = 40;
let totalPaginas;
let iterador;
let paginaActual = 1;

window.onload = () =>{
    formulario.addEventListener('submit', validarFormulario);
}


function validarFormulario(evento){
evento.preventDefault();
const terminoBusqueda = document.querySelector('#termino').value;

if(terminoBusqueda === ''){
    mostrarAlerta('Agregar termino de busqueda');
    return;
}

buscarImagenes();
}




function mostrarAlerta(mensaje){
const existealerta = document.querySelector('.bg-red-100');

if(!existealerta){

    const alerta = document.createElement('p');
    alerta.classList.add('bg-red-100','border-red-400','text-red-700','px-4','py-3','rounded','max-w-lg','mx-auto','mt-6','text-center');
    alerta.innerHTML =  ` 
    <strong class = "font-bold" >Error!</strong>
    <span class = "block sm:inline">${mensaje}</span>
    
    ` ;
     
    formulario.appendChild(alerta);
    setTimeout(()=>{
    alerta.remove();
    
    },3000);
    


}

    
}

function buscarImagenes(){
    const  termino = document.querySelector("#termino").value;
const key = '39143798-ced9ae8baf2dc7c6fffdbde82';
const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${registroporPagina}&page=${paginaActual}`;

fetch(url).then(respuesta => respuesta.json())
.then(resultado =>{

    totalPaginas = calcularPainas(resultado.totalHits);
console.log(totalPaginas);
    mostrarImagenes(resultado.hits);
});

}


//generador que va a registrar la cantidad de elementos de acuerdo a las paginas

function *crearPaginador(total){
    for(let i = 1; i <= total; i++){
yield i;
    }
}


function calcularPainas(total){
    return parseInt(Math.ceil(total/registroporPagina));
    }





function mostrarImagenes(imagenes){
console.log(imagenes);
    //limpiar
    while(resultado.firstChild){
    resultado.removeChild(resultado.firstChild)
}

imagenes.forEach(imagen => {
    const {previewURL, likes, views, largeImageURL} = imagen;

  resultado.innerHTML += `
  <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
  <div class = "bg-white">
  <img class = "w-full" src="${previewURL}">
 
  <div class = "p-4">
 <p class="font-bold"> ${likes}<span class = "font-light"> Me gusta </span></p>
 <p class="font-bold"> ${views}<span class = "font-light"> Veces vistas </span></p>
 <a class = "block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1" href = "${largeImageURL}" target = "_blank" rel="noopener noreferrer"> ver Imagen </a>
  </div>
  </div>
  </div>
  
  `;



});

//limpiar el paginador 

while(paginaciondiv.firstChild){
paginaciondiv.removeChild(paginaciondiv.firstChild);
}
//generamos el nuevo html
imprimiPaginador(); 


}



function imprimiPaginador(){
    iterador = crearPaginador(totalPaginas);
    
    while(true){
        const{value, done} = iterador.next();

if(done) return;


//si no genera un boton por cada elemento

const boton = document.createElement('a');
boton.href = '#';
boton.dataset.pagina = value;
boton.textContent = value;
boton.classList.add('siguiente',  'bg-yellow-400',  'px-4', 'py-1','mr-2','font-bold','mb-4','uppercase','rounded');

if (paginaActual === value) {
    boton.classList.add('bg-blue-500', 'text-white');
} else {
    boton.classList.add('bg-yellow-400', 'text-black'); 
}

boton.onclick = () =>{
    paginaActual = value;
    
    
    
    buscarImagenes();
    
}



paginaciondiv.appendChild(boton);




    }
    
    // console.log(iterador.next());
    
}