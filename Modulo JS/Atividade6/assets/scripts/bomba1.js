const btDefused = document.querySelector("#btDefused");
const boom = document.querySelector("#explosion");
const armed = document.querySelector("#armed");

function explosion() {
    
    btDefused.textContent = "Tentar Novamente!"
    armed.style.display = "none";
    boom.style.display = "flex";
    
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

        time = setTimeout(explosion, 10000);

        btDefused.textContent = "Desativar";
        armed.style.display = "flex";
        defused.style.display = "none";
        boom.style.display = "none";

    }
}

let time = setTimeout(explosion, 10000);

btDefused.addEventListener("click", statusBomb);

