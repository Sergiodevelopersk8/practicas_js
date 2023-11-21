export function mostrarAlerta(mensaje){
const alerta = document.querySelector('.bg-red-100');

if(!alerta){
    const alerta = document.createElement('p');
    alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3');
}

}