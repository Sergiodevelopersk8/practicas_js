const cardDiv = document.querySelector('.card');
cardDiv.addEventListener('click', e =>{
if(e.target.classList.contains('titulo')){
    console.log("diste click en el titulo");
}
if(e.target.classList.contains('precio')){
    console.log("diste click en el precio");
}
if(e.target.classList.contains('card')){
    console.log("diste click en el card");
}
});