///constructores

function Seguro(marca, year, tipo){
this.marca = marca;
this.year = year;
this.tipo = tipo;

}

//realiza la cotizacion de los datos

Seguro.prototype.cotizarSeguro = function(){

    let cantidad;
    const base = 2000;
switch(this.marca){
    
    case '1':
cantidad = base * 1.15;
    break;

    case '2':
        cantidad = base * 1.05;
    break;
    case '3':
        cantidad = base * 1.35;
    break;

    default:
    break;
        
}
//leer el año
const diferencia = new Date().getFullYear() - this.year;

//cada año la diferencia es mayor, el costo reduce a un 3%
cantidad -= ((diferencia * 3) * cantidad ) / 100;


/**
 * si el seguro es basico se multiplica por 30%
 * si es completo se multiplica por 50%
 */

if(this.tipo === 'basico'){
    cantidad *= 1.30;
}
else{
    cantidad *= 1.50;
}
return cantidad;
alert(cantidad);


}

function UI(){}

//llenar las opciones de años

UI.prototype.llenarOpciones = () =>{
const max = new Date ().getFullYear(),
min = max -20;

const selectYear = document.querySelector('#year');
for(let i = max; i > min; i--){
    let option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    selectYear.appendChild(option);
}
}

UI.prototype.mostrarMensaje = (mensaje,tipo) =>{
const div = document.createElement('div');

if(tipo === 'error'){
    div.classList.add('error');
}
else{
    div.classList.add('correcto');
}
div.classList.add('mensaje', 'mt-10');
div.textContent = mensaje;

//insertar html

const formulario = document.querySelector('#cotizar-seguro');
formulario.insertBefore(div,document.querySelector('#resultado'));

setTimeout(()=>{
    div.remove();
},3000)
}

UI.prototype.mostrarResultado = (total, seguro)=>{
const {marca, year, tipo} = seguro;
let textomarca;
switch(marca){
case '1':
textomarca = 'Americano';
    break;

    case '2':
textomarca = 'Asiatico';
    break;

    case '3':
textomarca = 'Europeo';
    break;
    
default:
brake;
}
const div = document.createElement('div');
div.classList.add('mt-10');

div.innerHTML = ` <p class="header">Tu Resumen</p>
<p class = "font-bold">Marca: <span class="font-normal">  ${textomarca} </span> </p>
<p class = "font-bold">Año: <span class="font-normal">  ${year} </span> </p>
<p class = "font-bold">Tipo: <span class="font-normal capital-Lize">  ${tipo} </span> </p>
<p class = "font-bold">Total: <span class="font-normal"> $ ${total} </span> </p> `;
const resultadoDiv =document.querySelector('#resultado');


//spinner
const spiner = document.querySelector('#cargando');
spiner.style.display = 'block';
setTimeout(()=>{
spiner.style.display = 'none';//se borra el spiner
resultadoDiv.appendChild(div);//se muestra el resultado
},3000);

};

const ui = new UI();


document.addEventListener('DOMContentLoaded', ()=>{
ui.llenarOpciones();//llena el select con los años
})

eventListeners();

function eventListeners(){
const formulario = document.querySelector('#cotizar-seguro');
formulario.addEventListener('submit',cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();

    //leer la marca seleccionada
const marca = document.querySelector('#marca').value;
    //leer año seleccionado
const year = document.querySelector('#year').value;
    //tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    
    if(marca === '' || year ==='' || tipo === ''){

ui.mostrarMensaje('Todos los campos son obligatorios','error');
return;
    }
  
        ui.mostrarMensaje('Cotizando....','exito');
//ocultar cotizacion previa
const resultados = document.querySelector('#resultado div');
if(resultados != null){
    resultados.remove();
}
        //instaciar el seguro
        const seguro = new Seguro(marca, year, tipo);
        seguro.cotizarSeguro();
const total = seguro.cotizarSeguro();
        //utilizar el prototype cotizar
ui.mostrarResultado(total, seguro);

    
}