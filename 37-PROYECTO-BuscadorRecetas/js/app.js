function IniciarApp(){
const selectCategorias = document.querySelector('#categorias');
const resultadoCategorias = document.querySelector('#resultado');
const modal = new bootstrap.Modal("#modal",{});
if(selectCategorias){
selectCategorias.addEventListener('change',seleccionarCategoria);

obtenerCategorias();
}
const  favoritosDiv = document.querySelector('.favoritos');
if(favoritosDiv){
    obteneFavoritos();
}

function  obtenerCategorias(){

const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
fetch(url).then(respuesta => { 
    return respuesta.json();
}).then(resultado =>{
    mostrarCategorias(resultado.categories);
})

}

function mostrarCategorias(categorias = []){
    categorias.forEach(categoria => {
        const {strCategory} = categoria;
    const opcion = document.createElement('OPTION'); 
        opcion.value = strCategory;
       opcion.textContent = strCategory;
        selectCategorias.appendChild(opcion);
    
});
}


function seleccionarCategoria(e){
const categoria = e.target.value;
const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;

fetch(url).then(respuesta =>{
    return respuesta.json();
}).then(resultado =>{
mostrarRecetas(resultado.meals)
})
}

function mostrarRecetas(recetas = []){
    LimpiarHTML(resultado);
    const heading = document.createElement('H2');
    heading.classList.add('text-center','text-black','my-5');
   
   
if(recetas.length > 0){
  heading.textContent = 'Resultados';
}else{
  heading.textContent = 'No Hay Resultados';
}
resultado.appendChild(heading);
    //iterra los resultados

    recetas.forEach(receta => {
        const { idMeal, strMeal, strMealThumb} = receta;
        const recetaContenedor = document.createElement('DIV');
        recetaContenedor.classList.add('col-md-4');
        const recetaCard =  document.createElement('DIV');
        recetaCard.classList.add('card', 'mb-4');

const recetaImagen =  document.createElement('IMG');
recetaImagen.classList.add('card-img-top');
recetaImagen.alt = `Imagen de la receta ${strMeal ?? receta.title}`;
/*
El operador "nullish coalescing"
(??) se utiliza para asignar un valor a una variable si el valor original es null o undefined 
En este caso, se está verificando si strMealThumb es diferente a null o undefined, si es asi se asigna a src el valor de strMealThumb, si no se asigna el valor de receta.img.
En resumen, 
estableciendo la propiedad src del elemento recetaImagen 
con el valor de strMealThumb si este no es null o undefined, 
de lo contrario se establece con el valor de receta.img.
*/

recetaImagen.src = strMealThumb ?? receta.img ;

const recetaCardBody = document.createElement('DIV');
recetaCardBody.classList.add('card-body');
const recetaHeading = document.createElement('H3');
recetaHeading.classList.add('card-title', 'mb-3');
recetaHeading.textContent = strMeal ?? receta.title;

const recetaButon= document.createElement('BUTTON');
recetaButon.classList.add('btn', 'btn-danger', 'w-100');
recetaButon.textContent = 'ver Receta';
recetaButon.onclick = function(){
    seleccionarReceta(idMeal ?? receta.id);
}
//INYECTAR HTML
recetaCardBody.appendChild(recetaHeading);
recetaCardBody.appendChild(recetaButon);
recetaCard.appendChild(recetaImagen);
recetaCard.appendChild(recetaCardBody);
recetaContenedor.appendChild(recetaCard);
resultadoCategorias.appendChild(recetaContenedor);


    });
}


function seleccionarReceta(id){
    const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url).then(respuesta =>{
        return respuesta.json();
    }).then(resultado =>{
        mostrarRecetaModal(resultado.meals[0]);
    })
}

function mostrarRecetaModal(receta){
const {idMeal, strInstructions, strMeal,strMealThumb} = receta;
//añadir contenido al modal
const modaltitle = document.querySelector('.modal .modal-title');    
const modalbody = document.querySelector('.modal .modal-body');    

modaltitle.textContent = strMeal;
modalbody.innerHTML = ` <img class = "img-fluid" src = "${strMealThumb}" alt = "receta ${strMeal}"/>
<h3 class = "my-3"> Instrucciones</h3>
<p >${strInstructions} </p> 
<h3 class = "my-3">Ingredientes y Cantidades  </h3>
`;
const ListGroup = document.createElement('UL');
ListGroup.classList.add('list-group');
//mostar ingredientes
for (let index = 1; index < 20; index++) {
    if(receta[`strIngredient${index}`]){
const ingrediente = receta[`strIngredient${index}`];
const cantida = receta[`strMeasure${index}`];
const ingredienteli = document.createElement('LI');
ingredienteli.classList.add('list-group-item');
ingredienteli.textContent = `${ingrediente} - ${cantida}`;
ListGroup.appendChild(ingredienteli);
    }
    
}
modalbody.appendChild(ListGroup);
const modalFooter = document.querySelector('.modal-footer');
LimpiarHTML(modalFooter);
//cerarr y favorito
const btnFavorito = document.createElement('BUTTON');
btnFavorito.classList.add('btn' ,'btn-danger', 'col');
//condición ? valor si es verdadero : valor si es falso
 btnFavorito.textContent = existeStorage(idMeal) ? 'Eliminar de favoritos' : 'Guardar en Favoritos';


//almacenar en local store
btnFavorito.onclick = function (){
    
    /* vamos a crear un objeto como parametro*/
    if(existeStorage(idMeal)){
        eliminarFavorito(idMeal);
    
        mostrarToast('Eliminado Correctamente');
        btnFavorito.textContent = 'Guardar favoritos';
        
        
        
    }
    else{
        
        agregarFavorito({id: idMeal,title:strMeal,img:strMealThumb});
   
 
    btnFavorito.textContent = 'Eliminar de favorito';   
    mostrarToast('Agregado Correctamente');
}
}
const btncerrarmodal = document.createElement('BUTTON');
btncerrarmodal.classList.add('btn' ,'btn-secondary', 'col');
btncerrarmodal.textContent = 'Cerrar';
btncerrarmodal.onclick = function (){
    modal.hide();
}
modalFooter.appendChild(btnFavorito);
modalFooter.appendChild(btncerrarmodal);

//mostrar modal
modal.show();


}


function agregarFavorito(recetaobjeto){
    //const favoritos = JSON.parse(localStorage.getItem('favoritos'))?? [];
    let favoritos;
    if (localStorage.getItem('favoritos') !== null) {
        favoritos = JSON.parse(localStorage.getItem('favoritos'));
    } else {
        favoritos = [];
    }
    localStorage.setItem('favoritos',JSON.stringify([...favoritos,recetaobjeto]));
    
}


function existeStorage(id){
    let favoritos;
    if (localStorage.getItem('favoritos') !== null) {
        favoritos = JSON.parse(localStorage.getItem('favoritos'));
    } else {
        favoritos = [];
    }
    
    return favoritos.some(favorito => favorito.id === id);
}

function mostrarToast(mensaje){
const toastDiv = document.querySelector('#toast');
const toastBody = document.querySelector('.toast-body');
const toast = new bootstrap.Toast(toastDiv);
toastBody.textContent = mensaje;
toast.show();
}




function eliminarFavorito(id){
    let favoritos;
    if (localStorage.getItem('favoritos') !== null) {
        favoritos = JSON.parse(localStorage.getItem('favoritos'));
    } else {
        favoritos = [];
    }
const nuevosFavoritos = favoritos.filter(favorito => favorito.id !== id);
localStorage.setItem('favoritos',JSON.stringify(nuevosFavoritos));
}


function obteneFavoritos(){
    let favoritos;
    if (localStorage.getItem('favoritos') !== null) {
        favoritos = JSON.parse(localStorage.getItem('favoritos'));
    } else {
        favoritos = [];
    }
    if(favoritos.length){
       
        
mostrarRecetas(favoritos);

    }
    else{
        const noFavoritos = document.createElement('P');
        noFavoritos.textContent = 'no hay favoritos aún';
        noFavoritos.classList.add('fs-4','text-center','font-bold','mt-5');
        resultado.appendChild(noFavoritos);
    }

}


function LimpiarHTML(selector){
    while(selector.firstChild){
selector.removeChild(selector.firstChild);
    }
}

}

document.addEventListener('DOMContentLoaded',IniciarApp);