const cep = document.querySelector("#cep");

function confirm(e) {
    if (e.data != "1" && e.data != "2" && e.data != "3" && e.data != "4" && e.data != "5" && e.data != "6" && e.data != "7" && e.data != "8" && e.data != "9" && e.data != null) {
        cep.value = cep.value.slice(0,-1);
    } 
}

function tamanho(e) {
    cep.value = cep.value.substring(0,9);

    if (cep.value.length == 5 && e.code != "Backspace") {
        cep.value += "-";
    }
}

function del(e) {

    if(e.code == "Backspace"){}
    
}

cep.addEventListener("input", confirm);
cep.addEventListener("keyup", tamanho);
cep.addEventListener("keydown", del);