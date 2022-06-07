const btVerificar = document.querySelector("#verificar");

function verificar(){

    const entrada = parseFloat(document.querySelector("#numEntry").value);

    if(isNaN(entrada)){

        alert("Preencha o campo vazio");

    } else{
        
        const idMenor = document.querySelector("#textMenor");
        const idMaior = document.querySelector("#textMaior");
        const menorInt = Math.floor(entrada);
        const maiorInt = Math.ceil(entrada);

        idMenor.innerHTML = menorInt;
        idMaior.innerHTML = maiorInt;

    }
}

btVerificar.addEventListener("click", verificar);