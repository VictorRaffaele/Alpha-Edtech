const btVerif = document.querySelector("#sorteio");

function sorteioIBGE() {
    
    const idResult = document.querySelector("#result");
    const sorteado =  Math.random() * 101;

    if(sorteado <= 8.0661){

        idResult.innerHTML = "Homens Idosos";

    } else if(sorteado > 8.0661 && sorteado <= 16.7){

        idResult.innerHTML = "Mulheres Idosos";

    } else if(sorteado > 16.7 && sorteado <= 56.9339){

        idResult.innerHTML = "Homens Não Idosos";

    } else{

        idResult.innerHTML = "Mulheres Não Idosos";

    }

}

btVerif.addEventListener("click", sorteioIBGE);