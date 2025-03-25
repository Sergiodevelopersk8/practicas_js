//new biding
function Auto(modelo,color){

this.modelo = modelo;    
this.color = color;

}


const auto = new Auto('Camaro','Azul');
console.log(auto);



//windows biding
window.color='azul';
function hola(){
    console.log(color);
}

hola();




