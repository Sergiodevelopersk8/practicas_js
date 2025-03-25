const enlace = document.createElement('A');

enlace.textContent = 'nuevo enlace';

enlace.href = '/nuevo-enlace';

const navegacion = document.querySelector('.navegacion');

// navegacion.appendChild(enlace);

navegacion.insertBefore(enlace,navegacion.children[1]);

//crear un card de forma dinamica
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add=('categoria','concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de rock';
parrafo2.classList.add=('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '800 por persona';
parrafo3.classList.add=('precio');

//crear div con la clase de info

const info=document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear la imagen

const imagen = document.createElement('img');
imagen.src='img/hacer2.jpg';


//crear el card
const card = document.createElement('div');
card.classList.add('card');
//asignar imagen
card.appendChild(imagen);
//asignar info
card.appendChild(info);


const contenedor = document.querySelector('.hacer .contenedor-cards');

contenedor.appendChild(card);


// contenedor.innerHTML='card';