const btIniciar = document.querySelector("#btIniciar");
const idSound = document.querySelector("#sound");
const idTime = document.querySelector("#time");
let time = null;
let bell = null;

function clock() {

    const sound = new Audio("./assets/sounds/alarm2.wav");
    idSound.innerHTML = sound.play();
    
}

function ring(){

    bell = setInterval(clock, 1000);

}

function alarm() {

    const min = document.querySelector("#min").value;
    const sec = document.querySelector("#sec").value;
    const sumTime = ((min*60) + (sec)) * 1000;

    if(btIniciar.innerHTML == "Iniciar"){

        time = setTimeout(ring, sumTime);
        idTime.textContent = sumTime;
        btIniciar.innerHTML = "Desarmar";

    } else{

        clearInterval(bell);
        btIniciar.innerHTML = "Iniciar";

    }
    
}

btIniciar.addEventListener("click", alarm);