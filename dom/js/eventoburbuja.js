//Evento burbuja

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click',()=>{
alert("click en card");
});

infoDiv.addEventListener('click',()=>{
    alert("click en info");
});

titulo.addEventListener('click',()=>{
    alert("click en titulo");
});

