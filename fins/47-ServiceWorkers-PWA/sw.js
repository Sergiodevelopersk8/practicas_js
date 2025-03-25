//memoria en cache cuando no hay conexion
const nombreCache = 'apv-v1';
const archivos = [
    '/',
    '/index.html',
    '/error.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js'
]; 



//cuando se instala service worker 
self.addEventListener('install', e =>{
   

e.waitUntil(
    caches.open(nombreCache).then(cache =>{
        console.log('cacheando');
        cache.addAll(archivos);
    })
)


});


//activar el serviceworker

self.addEventListener('activate', e =>{
    e.waitUntil(caches.keys()
.then(keys =>{
    return Promise.all(
        keys.filter( key => key !== nombreCache)
        .map(key => caches.delete(key))//borrar loas antigus caches
    )
}))
});

//registrar evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e =>{
e.respondWith(
    caches.match(e.request)
    .then(respuestaCache => {
        return respuestaCache
    })
    .catch( () => caches.match('/error.html'))
)
});



