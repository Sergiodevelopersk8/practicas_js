document.addEventListener('visibilitychange',() =>{

   if(document.visibilityState === 'visible'){
    console.log("ejecutar video");
}
else{
       console.log("no se ejecuta video");

   }

})