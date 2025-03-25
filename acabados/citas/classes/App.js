
import { datosCita, nuevaCita} from '../js/funciones.js';
import {
    mascotaimput,
    propietarioimput, 
    telefonoimput,
    fechaimput, 
    horaimput, 
    sintomasimput, 
    formulario} from '../js/selectores.js';



class App{
    constructor(){
this.initApp();        
    }
    initApp(){
        mascotaimput.addEventListener('input',datosCita);
propietarioimput.addEventListener('input',datosCita);
telefonoimput.addEventListener('input',datosCita);
fechaimput.addEventListener('input',datosCita);
horaimput.addEventListener('input',datosCita);
sintomasimput.addEventListener('input',datosCita);
//formulario para nuevas citas
formulario.addEventListener('submit',nuevaCita);

    }
}

export default App;