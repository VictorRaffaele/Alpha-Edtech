// IDs variables
const formCalc = document.querySelector("#calc");
const idOp1 = document.querySelector("#operando1");
const idOp2 = document.querySelector("#operando2");
const idOperador = document.querySelector("#operador");
const idBt = document.querySelector("#calcular");
var idResultado = document.querySelector("#resultado");


function soma(operando1, operando2) {
    const resultado = operando1 + operando2;
    return resultado;
}

function subtração(operando1, operando2) {
    const resultado = operando1 - operando2;
    return resultado;
}

function multiplicação(operando1, operando2) {
    const resultado = operando1 * operando2;
    return resultado;
}

function divisão(operando1, operando2) {
    const resultado = operando1 / operando2;
    return resultado;
}

function calcular(){

    // Value variables
    const operador = idOperador.value;
    const operando1 = parseFloat(idOp1.value);
    const operando2 = parseFloat(idOp2.value);

    if((operando1 && operando2 !== NaN) && (operando2 && operando1 !== NaN )){

        if(operador == "soma"){
            idResultado.innerHTML = soma(operando1, operando2);
        } else if(operador == "subtração"){
            idResultado.innerHTML = subtração(operando1, operando2);
        } else if(operador == "multiplicação"){
            idResultado.innerHTML = multiplicação(operando1, operando2);
        } else if(operador == "divisão"){
            idResultado.innerHTML = divisão(operando1, operando2);
        }
    } else{
        alert("Digite apenas numeros ou preencha o campo vazio!");
    }
};

idBt.addEventListener("click", calcular);