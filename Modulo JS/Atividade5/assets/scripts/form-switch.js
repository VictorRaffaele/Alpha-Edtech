const btExibir = document.querySelector("#btExibir");

function exibirTextual() {
    
    const entryNum = parseInt(document.querySelector("#entryNum").value);
    const textual = document.querySelector("#textual");
    
    if(entryNum > 10){

        alert("Digite um número menor de 0 até 10!");

    } else{

        switch (entryNum) {

            case 0:
                textual.innerHTML = "Zero";
                break;
            case 1:
                textual.innerHTML = "Um";
                break;
            case 2:
                textual.innerHTML = "Dois";
                break;
            case 3:
                textual.innerHTML = "Três";
                break;
            case 4:
                textual.innerHTML = "Quatro";
                break;
            case 5:
                textual.innerHTML = "Cinco";
                break;
            case 6:
                textual.innerHTML = "Seis";
                break;
            case 7:
                textual.innerHTML = "Sete";
                break;
            case 8:
                textual.innerHTML = "Oito";
                break;
            case 9:
                textual.innerHTML = "Nove";
                break;
            case 10:
                textual.innerHTML = "Dez";
                break;                
        }
    }
}

btExibir.addEventListener("click", exibirTextual);