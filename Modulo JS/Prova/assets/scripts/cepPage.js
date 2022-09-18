import {default as Cep} from './Cep.js';

const cep = document.querySelector("#cep");
const resultBt = document.querySelector("#resultBt");

function confirm(e) {
    if (e.data != "1" && e.data != "2" && e.data != "3" && e.data != "4" && e.data != "5" && e.data != "6" && e.data != "7" && e.data != "8" && e.data != "9" && e.data != "0" && e.data != null) {
        cep.value = cep.value.slice(0,-1);
    } 
}

function tamanho(e) {
    cep.value = cep.value.substring(0,8);
}

function showCep() {

    const result = document.querySelector("#result");
    const cepEntry = new Cep();
    cepEntry.setCep(cep.value);

    result.innerHTML = 'formatado: ' + cepEntry.getFormated() + '<br>' + 'somente números: ' + cepEntry.getNum();

}

cep.addEventListener("input", confirm);
cep.addEventListener("input", tamanho);
resultBt.addEventListener("click", showCep);