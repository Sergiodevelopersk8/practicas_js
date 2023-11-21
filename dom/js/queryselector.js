//retorna solo un elemento

const card =document.querySelector('.card');

console.log(card);

//podemos tener selectores especificos como en css3

const info=document.querySelector('.premium .info');
console.log(info);

//seleccionar el segundo card de hospedaje 

const segundocard = document.querySelector('section.hospedaje .card:nth-child(2)');

console.log(segundocard);

//seleccionar formularios

const formulario=document.querySelector('.contenido-hero #formulario');

console.log(formulario);


//seleccionar un elemento html

const navegacion = document.querySelector('nav');
console.log(navegacion);