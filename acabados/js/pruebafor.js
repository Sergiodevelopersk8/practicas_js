const meses =["enero","febrero","marzo"];

 function muestra(){
for(var i=0;i<meses.length;i++){
if(meses[i] == "enero"){
    console.log("si existe" + " "+ meses[i]);
}
}
}
muestra();