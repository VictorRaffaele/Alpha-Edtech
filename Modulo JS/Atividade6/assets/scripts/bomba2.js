const btDefused = document.querySelector("#btDefused");
const boom = document.querySelector("#explosion");
const armed = document.querySelector("#armed");
const sound = document.querySelector("#sound");
let tickTock = setInterval(tick, 1000);
let time = setInterval(explosion, 60000);

function tick() {

    const soundTick = new Audio("./assets/sounds/tick.wav");
    sound.innerHTML = soundTick.play();
    
}

function explosion() {
    
    const soundExp = new Audio("./assets/sounds/explosion.mp3");

    btDefused.textContent = "Tentar Novamente!";
    armed.style.display = "none";
    boom.style.display = "flex";
    sound.innerHTML = soundExp.play();
    clearInterval(tickTock);
    clearInterval(time);
    
}

function statusBomb() {

    const defused = document.querySelector("#defused");

    if (armed.style.display == "flex") {

        clearInterval(tickTock);
        clearInterval(time);

        btDefused.textContent = "Reativar";
        armed.style.display = "none";
        defused.style.display = "flex";
        boom.style.display = "none";

    } else{

        clearInterval(time);
        clearInterval(tickTock);
        
        tickTock = setInterval(tick, 1000);
        time = setInterval(explosion, 60000);

        btDefused.textContent = "Desativar";
        armed.style.display = "flex";
        defused.style.display = "none";
        boom.style.display = "none";

    }
}

btDefused.addEventListener("click", statusBomb);