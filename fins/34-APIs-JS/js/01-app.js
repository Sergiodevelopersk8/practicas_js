const notificarmeBtn = document.querySelector('#notificar');
const vernotificacion = document.querySelector('#verNotificacion');

notificarmeBtn.addEventListener ('click', ()=>{
Notification.requestPermission().then(resultado =>{
    console.log('el resultado es '+ resultado);
})
});
vernotificacion.addEventListener ('click', ()=>{
if(Notification.permission === 'granted'){

     console.log('sigue la nueva notificacion ');
// primera forma de notificacion
     // new Notification('esta es la nueva notificacion ', {icon:'./img/ccj.png', body:'Sergio Merino Cortez'});
//segunda forma de notificacion 
     const notificacion = new Notification('esta es la nueva notificacion ', {icon:'./img/ccj.png', body:'Sergio Merino Cortez'});

     notificacion.onclick = function(){
        window.open('https://www.google.com');
     }

}
    
});


