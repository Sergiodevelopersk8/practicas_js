if('serviceWorker' in navigator){
navigator.serviceWorker.register('./sw.js')
.then(registrado => console.log('se instalo correctamente...', registrado))
.catch(error => console.log('falló la instalación...', error));
}
else{
    console.log('service worker no soportado');
}