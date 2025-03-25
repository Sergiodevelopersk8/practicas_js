const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI(){
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

recognition.start();

recognition.onstart = function (){
    salida.classList.add('mostrar');
    salida.textContent = 'escuchando...';
};

recognition.onspeechend = function (){
    salida.textContent = 'Se dejo de grabar';
    recognition.stop();

};

recognition.onresult = function (e){
    console.log();
    const {confidence,transcript} = e.results[0][0];

    const speech = document.createElement('p');
speech.innerHTML = `grabando ${transcript}`;
salida.appendChild(speech);


}



}