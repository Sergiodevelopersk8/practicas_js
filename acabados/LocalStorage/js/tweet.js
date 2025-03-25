const listaTweets = document.querySelector('#lista-tweets');

const formulario = document.querySelector('#formulario');

tweets = [];

// Eventos 
eventListeners();

function eventListeners(){
    // añadirtweet
    formulario.addEventListener('submit', agregarTweet);

    // borrarTweet
    listaTweets.addEventListener('click', borrarTweet);

// contenido cargado

document.addEventListener('DOMContentLoaded',()=>{
    tweets=JSON.parse(localStorage.getItem('tweets')) || [];
console.log(tweets);
crearHTML();
});

}

//añadir tweet del formulario

function agregarTweet(e){
    e.preventDefault();
    //leer el valor del textarea
    const tweet = document.querySelector('#tweet').value;
    //validacion
    if(tweet===''){
        mostrarError('Un mensaje no puede ir vacio');
        return;
    }

//crear un objeto tweet
const tweetObj = {
    id:Date.now(),
    texto:tweet
}

//añadir a mis tweets

tweets = [...tweets,tweetObj];

//una vez agregado mandamos renderizr nuestro html
crearHTML();

//reiniciar el formulario
formulario.reset();


}

function mostrarError(error){
    const mensajeEerror = document.createElement('p');
    mensajeEerror.textContent = error;
    mensajeEerror.classList.add('error');

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeEerror);

    setTimeout(()=>{
        mensajeEerror.remove();
    }, 3000);
}

function crearHTML(){
    limpiarHTML();

    if(tweets.length > 0 ){
      
    for(let i = 0; i < tweets.length; i++){
      
       tweet = tweets[i];
    
        const botonBorrar=document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';

        //crear elemento y añadirle el contenido a la lista 

        const li = document.createElement('li');

        //añade el texto
        li.innerText =  tweet.texto;

        //añade el boton de borrar al tweet
        li.appendChild(botonBorrar);

        //añade un atributo unico
        li.dataset.tweetId = tweet.id;

        //añade el tweet a la lista

        listaTweets.appendChild(li);
        
    }
}
sincronizarStorage();
}



//eliminar el tweet del dom
function borrarTweet(e){
    e.preventDefault();
    const id = e.target.parentElement.dataset.tweetId;
    tweets = tweets.filter( tweet => tweet.id != id  );
    crearHTML();
}

// Agrega tweet a local storage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Elimina los cursos del carrito en el DOM
function limpiarHTML() {
    while(listaTweets.firstChild) {
         listaTweets.removeChild(listaTweets.firstChild);
    }
}