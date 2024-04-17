// npm install -g json-server
// json-server --watch db.json

import {obtenerClientes, eliminarCliente } from './API.js'


(function(){
const listado = document.querySelector('#listado-clientes');
document.addEventListener('DOMContentLoaded', mostrarClientes);

listado.addEventListener('click', confirmarEliminar);

async function mostrarClientes(){
    const clientes = await obtenerClientes();
    for(let clienten = 0; clienten < clientes.length; clienten++){
       const cliente = clientes[clienten];
        const{nombre,email, telefono,empresa,id} = cliente;
        
        const row = document.createElement('tr');
        row.innerHTML+= `
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">   
        <p class="txt-sm leading-5 font-medium text-gray-700 text-lg font-bold ">${nombre} </p>
        <p class="txt-sm leading-10  text-gray-700 ">${email} </p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">   
        <p class="txt-sm leading-10  text-gray-700 ">${telefono} </p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">   
        <p class="txt-sm leading-10  text-gray-600 ">${empresa} </p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">   
        <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
        <a href="#"data-cliente=${id}" class="text-red-600 hover:text-teal-900 eliminar">Eliminar</a>
        </td>
        
        `;
        listado.appendChild(row);
        
    }

}

function confirmarEliminar(e){
if(e.target.classList.contains('eliminar')){
    
    
      const clienteId= parseInt(e.target.dataset.cliente);
      const confirmar = confirm('¿Deseasn eliminar este registro ?');
      if (confirmar) {
        eliminarCliente( clienteId);
      }

}
}


})();