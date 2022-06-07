const btSort = document.querySelector("#sorteio");

function randomInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}

function sorteio() {

    const valorMin = parseInt(document.querySelector("#minimo").value , 10);
    const valorMax = parseInt(document.querySelector("#maximo").value , 10);
    const idResult = document.querySelector("#textResult");

    if(isNaN(valorMin) || isNaN(valorMax)){

        alert("Preencha o campo vazio!");

    } else if(valorMax < valorMin ){

        alert("O valor minimo é maior que o maximo, troque os valores!")

    } else{

        const sorteado = randomInt(valorMin, valorMax);
        idResult.textContent = `Valor sorteado: ${sorteado}`;

    }
}

btSort.addEventListener("click", sorteio);