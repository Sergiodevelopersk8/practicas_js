
export class Datoss{

    // constructor(Dato1,Dato2){
    //     this.Dato1 = Dato1;
    //     this.Dato2 = Dato2;
    // }
    Obtener(dato1,dato2){
    const patron = document.querySelector('.parrafo');
    
    var arrays = [dato1,dato2];
    
    for(var i = 0; i < arrays.length; i++){
        
        console.log(arrays[i]);
         const texto = document.createTextNode(arrays[i]);
         patron.appendChild(texto);
    
    }
    









    }
}