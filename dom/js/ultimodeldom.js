const btnflotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

// btnflotante.addEventListener('click',()=>{
//     alert("disteclick");
// });

btnflotante.addEventListener('click',mostrarOcultarfooter);

function mostrarOcultarfooter(){
    if(footer.classList.contains('activo')){
    footer.classList.remove('activo');  
    this.classList.remove('activo');  
    this.textContent = 'Idioma y Moneda';
    }else{
   footer.classList.add('activo');
   this.classList.add('activo'); 
   this.textContent = 'X Cerrar';
}
console.log(footer.classList)
}