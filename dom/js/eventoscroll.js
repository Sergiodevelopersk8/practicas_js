window.addEventListener('scroll',()=>{
    const premiun = document.querySelector('.premium');
    const ubicacion = premiun.getBoundingClientRect();
    if(ubicacion.top < 100){
        alert("elemento ya visible");
    }
    else{
        alert("falta mas scroll");
    }
    
});