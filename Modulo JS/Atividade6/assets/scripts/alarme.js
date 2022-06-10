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

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = 00;
        }
    }, 1000);
}    

function alarm() {

    const min = parseInt(document.querySelector("#min").value);
    const sec = parseInt(document.querySelector("#sec").value);
    const duration = min + sec;
    const sumTime = ((min*60) + (sec)) * 1000;

    if(btIniciar.innerHTML == "Iniciar"){

        time = setTimeout(ring, sumTime);
        startTimer(duration, idTime);
        btIniciar.innerHTML = "Desarmar";

    } else{

        clearInterval(bell);
        clearTimeout(time);
        btIniciar.innerHTML = "Iniciar";

    }
    
}

btIniciar.addEventListener("click", alarm);