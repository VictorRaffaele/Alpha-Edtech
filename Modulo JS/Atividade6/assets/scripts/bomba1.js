const btDefused = document.querySelector("#btDefused");
const boom = document.querySelector("#explosion");
const armed = document.querySelector("#armed");
let time = setTimeout(explosion, 3000);

function explosion() {
    
    const sound = document.querySelector("#sound");
    const soundExp = new Audio("./assets/sounds/explosion.mp3");

    btDefused.textContent = "Tentar Novamente!";
    armed.style.display = "none";
    boom.style.display = "flex";
    sound.innerHTML = soundExp.play();
    
}

function statusBomb() {

    const defused = document.querySelector("#defused");

    if (armed.style.display == "flex") {

        clearTimeout(time);

        btDefused.textContent = "Reativar";
        armed.style.display = "none";
        defused.style.display = "flex";
        boom.style.display = "none";

    } else{

        clearTimeout(time);
        time = setTimeout(explosion, 3000);

        btDefused.textContent = "Desativar";
        armed.style.display = "flex";
        defused.style.display = "none";
        boom.style.display = "none";

    }
}

btDefused.addEventListener("click", statusBomb);