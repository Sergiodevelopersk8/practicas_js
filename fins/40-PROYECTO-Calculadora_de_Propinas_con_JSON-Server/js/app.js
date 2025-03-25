let cliente = {
    mesa: '',
    hora:'',
    pedido:[]
};

const categorias = {
1:'comida',
2:'Bebidas',
3:'Postres'
};

const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click',guardarCliente);


function guardarCliente(){
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    //Revisar si hay campos vacios 
    const camposVacios = [mesa, hora].some(campo => campo === '');
    
   
   

if(camposVacios){
    //verificar si existe una alerta
const existeAlerta = document.querySelector('.invalid-feedback');
if(!existeAlerta){

    const alerta = document.createElement('div');
    alerta.classList.add('invalid-feedback','d-block','text-center');
    alerta.textContent = 'Todos los campos son obligatorios';
    document.querySelector('.modal-body form').appendChild(alerta);
setTimeout(()=>{
alerta.remove();
},3000);
}
return;
}
/*Asignar datos del  formulario al cliente  */
cliente = {...cliente, mesa,hora};


//ocultar  modal

const modalFormulario = document.querySelector("#formulario");
const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
modalBootstrap.hide();


//mostrar las secciones

mostrarSecciones();
//obtener paltillos de la api json server

obtenerPlatillos();
}


function mostrarSecciones(){

    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none') );
    
    }
function obtenerPlatillos(){
    const url = 'http://localhost:4000/platillos';
fetch(url).then(respuesta => respuesta.json())
.then(resultado => mostrarPlatillos(resultado))
.catch(error => console.log(error));


}

function  mostrarPlatillos(platillos){
const contenido = document.querySelector('#platillos .contenido');
platillos.forEach(platillo =>{

const row = document.createElement('DIV');
row.classList.add('row','py-3','border-top');
const nombre = document.createElement('DIV');
nombre.classList.add('col-md-4');
nombre.textContent = platillo.nombre;

const precio = document.createElement('DIV');
precio.classList.add('col-md-3','fw-bold');
precio.textContent=`$${platillo.precio}`;

const categoria = document.createElement('DIV');
categoria.classList.add('col-md-3');
categoria.textContent = categorias[platillo.categoria];

const inputCantidad = document.createElement('INPUT');
inputCantidad.type= 'number';
inputCantidad.min = 0;
inputCantidad.value = 0;
inputCantidad.id = `producto-${platillo.id}`;
inputCantidad.classList.add('form-control');

///funcion que detecta la cantidad  y el platillo que se esta agregando 
inputCantidad.onchange = function(){
const cantidad = parseInt(inputCantidad.value);
    agregarPlatillo({...platillo,cantidad});
}

const agregar = document.createElement('DIV');
agregar.classList.add('col-md-2');
agregar.appendChild(inputCantidad);

row.appendChild(nombre);
row.appendChild(precio);
row.appendChild(categoria);
row.appendChild(agregar);
contenido.appendChild(row);


});
}

function agregarPlatillo(producto){
    //extraer el pedido actual
    let {pedido} = cliente;
    
    //revisar la cantidad sea > 0
    if(producto.cantidad > 0){
        //comprueba el elemento ya existe en el array
        if(pedido.some(articulo => articulo.id === producto.id)){
//el articulo ya existe actualizamos el array
const pedidoActualizado = pedido.map(articulo => {
    if(articulo.id === producto.id){
        articulo.cantidad = producto.cantidad;
    }
    return articulo;

});
    //se asigna el nuevon array  a cliente.pedido

    cliente.pedido = [...pedidoActualizado];

 }
  else{
//el articulo no existe lo agregamos al array
            cliente.pedido = [...pedido,producto];
   }
}
 else
    {
        //eliminar elmentos cuando la cantidad sea 0
        const resultado = pedido.filter(articulo => articulo.id !== producto.id);
        cliente.pedido = [...resultado];

        
    }
    
    //Limpiar el Resumen
    limpiarHMTL();
    
    if(cliente.pedido.length){

        //mostrar el resumen
        actualizarResumen();
    }
    else{
        mensajepedidoVacio();
    }

}


function actualizarResumen(){
    const contenido = document.querySelector('#resumen .contenido');
    const resumen = document.createElement('DIV');
    resumen.classList.add('col-md-6', 'card', 'py-2', 'px-3', 'shadow');
    
    //informacion de la mesa
    const mesa = document.createElement('P');
    mesa.textContent = 'Mesa: ';
    mesa.classList.add('fw-bold');
    
    const mesaSpan = document.createElement('SPAN');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add('fw-normal');
    
    
    //informacion de la hora
    const hora = document.createElement('P');
    hora.textContent = 'Hora: ';
    hora.classList.add('fw-bold');
    
    const horaSpan = document.createElement('SPAN');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw-normal');


//Titulo de la seccion

const heading = document.createElement('H3');
heading.textContent= 'Platillos Consumidos';
heading.classList.add('my-4', 'text-center');

    
//iterar sobre el array de pedidos 

const grupo = document.createElement('UL');
grupo.classList.add('list-group');

const {pedido}  = cliente;
pedido.forEach(articulo =>{
const {nombre, cantidad, precio, id} = articulo;
const lista = document.createElement('LI');
lista.classList.add('list-group-item');

const nombreEl = document.createElement('H4');
nombreEl.classList.add('my-4');
nombreEl.textContent = nombre;

//cantidad del articulo
const cantidadEl = document.createElement('P');
cantidadEl.classList.add('fw-bold');
cantidadEl.textContent = 'Cantidad: ';

const cantidadValor = document.createElement('SPAN');
cantidadValor.classList.add('fw-normal');
cantidadValor.textContent = cantidad;

//precio del articulo
const precioEl = document.createElement('P');
precioEl.classList.add('fw-bold');
precioEl.textContent = 'Precio: ';

const precioValor = document.createElement('SPAN');
precioValor.classList.add('fw-normal');
precioValor.textContent = `$${precio}`;

//subtotal del articulo
const subtotalEl = document.createElement('P');
subtotalEl.classList.add('fw-bold');
subtotalEl.textContent = 'Subtotal: ';

const subtotalValor = document.createElement('SPAN');
subtotalValor.classList.add('fw-normal');
subtotalValor.textContent = calcularSubotal(precio, cantidad);

//boton para eliminar
const btnEliminar = document.createElement('BUTTON');
 btnEliminar.classList.add('btn','btn-danger');
 btnEliminar.textContent = 'Eliminar del Pedido';

 //funcion para eliminar pedido

 btnEliminar.onclick = function(){
    eliminarProducto(id);
 }


//agregar valores a sus contenedores
cantidadEl.appendChild(cantidadValor);
precioEl.appendChild(precioValor);
subtotalEl.appendChild(subtotalValor);



//agregar elementos al li
lista.appendChild(nombreEl);
lista.appendChild(cantidadEl);
lista.appendChild(precioEl);
lista.appendChild(subtotalEl);
lista.appendChild(btnEliminar);


//agregar lista al grupo principal
grupo.appendChild(lista);


});

    //agregar elementos
    mesa.appendChild(mesaSpan);
    hora.appendChild(horaSpan);
    resumen.appendChild(heading);
    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(grupo);
    contenido.appendChild(resumen);

    //propinas
    formularioPropinas();
}


function limpiarHMTL()
{
    const contenido = document.querySelector('#resumen .contenido');
    while(contenido.firstChild){
contenido.removeChild(contenido.firstChild);
    }
}

function calcularSubotal(precio,cantidad){
    return `$ ${precio * cantidad}`;
}

function eliminarProducto(id)
{
const {pedido} = cliente;
const resultado = pedido.filter(articulo => articulo.id !== id);
cliente.pedido = [...resultado];
 //Limpiar el Resumen
 limpiarHMTL();
    
 if(cliente.pedido.length){

    //mostrar el resumen
    actualizarResumen();
}
else{
    mensajepedidoVacio();
}


//producto se elimino por lo tanto regresamosla cantidad a 0 en el form

const productoEliminado = `#producto-${id}`;
const inputEliminado = document.querySelector(productoEliminado);
inputEliminado.value = 0;    



}



function mensajepedidoVacio(){
const contenido = document.querySelector('#resumen .contenido');
const texto = document.createElement('P');
texto.classList.add('text-center');
texto.textContent = 'Añade los elementos del Pedido';
contenido.appendChild(texto);
}

function formularioPropinas(){
    const contenido = document.querySelector('#resumen .contenido');
    const formulario = document.createElement('DIV');
    formulario.classList.add('col-md-6','formulario');
    const divFormulario = document.createElement('DIV');
    divFormulario.classList.add('card','py-2','px-3','shadow');
    const heading = document.createElement('H3');
    heading.classList.add('my-4', 'text-center');
    heading.textContent = 'Propina';


    divFormulario.appendChild(heading);
    formulario.appendChild(divFormulario);

//radio buton 10%
const radio10 = document.createElement('INPUT');
radio10.type = 'radio';
radio10.name = 'propina';

radio10.value = 10;
radio10.classList.add('form-check-input');
radio10.onclick = calcularPropina;

const radio10Label = document.createElement('LABEL');
radio10Label.textContent = '10%';
radio10Label.classList.add('form-check-label');

const radio10Div = document.createElement('DIV');
radio10Div.classList.add('form-check');

radio10Div.appendChild(radio10);
radio10Div.appendChild(radio10Label);

//radio buton 25%
const radio25 = document.createElement('INPUT');
radio25.type = 'radio';
radio25.name = 'propina';

radio25.value = 25;
radio25.classList.add('form-check-input');
radio25.onclick= calcularPropina;
const radio25Label = document.createElement('LABEL');
radio25Label.textContent = '25%';
radio25Label.classList.add('form-check-label');

const radio25Div = document.createElement('DIV');
radio25Div.classList.add('form-check');

radio25Div.appendChild(radio25);
radio25Div.appendChild(radio25Label);



//radio buton 50%
const radio50 = document.createElement('INPUT');
radio50.type = 'radio';
radio50.name = 'propina';

radio50.value = 50;
radio50.classList.add('form-check-input');
radio50.onclick= calcularPropina;

const radio50Label = document.createElement('LABEL');
radio50Label.textContent = '50%';
radio50Label.classList.add('form-check-label');

const radio50Div = document.createElement('DIV');
radio50Div.classList.add('form-check');

radio50Div.appendChild(radio50);
radio50Div.appendChild(radio50Label);






divFormulario.appendChild(heading);
divFormulario.appendChild(radio10Div)
divFormulario.appendChild(radio25Div)
divFormulario.appendChild(radio50Div)
formulario.appendChild(divFormulario);

    contenido.appendChild(formulario);
    
    
}


function calcularPropina(){
    console.log('radio');
    const {pedido} = cliente;
    let subtotal = 0;

    //calcular el subtotal a pagar
    pedido.forEach(articulo => {
        subtotal += articulo.cantidad * articulo.precio;
    });

    //selecciona la cantidad del radio
    const propinaseleccionada = document.querySelector('[name = "propina"]:checked').value;

//calcular la porpina 
const propina = ((subtotal * parseInt(propinaseleccionada)) / 100);

//calcular el total a pagar


const total = subtotal + propina;


mostrarTotalHTML(subtotal, total, propina);
}


function mostrarTotalHTML(subtotal, total, propina){

const divTotales = document.createElement('DIV');
divTotales.classList.add('total-pagar', 'my-5');

//subtotal
const subtotalParrafo = document.createElement('P');
subtotalParrafo.classList.add('fs-4','fw-bold','mt-2');
subtotalParrafo.textContent = `Sub Total : ` ;

const subtotalSpan = document.createElement('SPAN');
subtotalSpan.classList.add('fw-normal');
subtotalSpan.textContent = ` $${subtotal}`;


//Propina
const propinaParrafo = document.createElement('P');
propinaParrafo.classList.add('fs-4','fw-bold','mt-2');
propinaParrafo.textContent = `Propina : ` ;

const propinaSpan = document.createElement('SPAN');
propinaSpan.classList.add('fw-normal');
propinaSpan.textContent = ` $${propina}`;

//Total
const totalParrafo = document.createElement('P');
totalParrafo.classList.add('fs-4','fw-bold','mt-2');
totalParrafo.textContent = `Total : ` ;

const totalSpan = document.createElement('SPAN');
totalSpan.classList.add('fw-normal');
totalSpan.textContent = ` $${total}`;






subtotalParrafo.appendChild(subtotalSpan);
propinaParrafo.appendChild(propinaSpan);
totalParrafo.appendChild(totalSpan);

//eliminar el total resultado

const totalPagarDiv = document.querySelector('.total-pagar');

if(totalPagarDiv){
    totalPagarDiv.remove();
}

divTotales.appendChild(subtotalParrafo);
divTotales.appendChild(propinaParrafo);
divTotales.appendChild(totalParrafo);

const formulario = document.querySelector('.formulario > div');
formulario.appendChild(divTotales);



}


// http://127.0.0.1:5500/40-PROYECTO-Calculadora_de_Propinas_con_JSON-Server/index.html
//json-server --watch db.json --port 4000