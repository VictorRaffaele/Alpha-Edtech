// IDs variables
const formCalc = document.querySelector("#calc");
const idBt = document.querySelector("#calcular");
const idNum1 = document.querySelector("#operando1");
const idNum2 = document.querySelector("#operando2");

function soma(num1, num2) {

    if (isNaN(num1) || isNaN(num2)) {
        console.log(num1, num2)

        throw new Error(`[sum] Impossible to sum ${idNum1.value} + ${idNum2.value}`);

    } else {
        const resultado = num1 + num2;
        return resultado;

    } 
}

function subtração(num1, num2, result) {
    
    if (num1 < num2 || isNaN(num1) || isNaN(num2)) {

        throw new Error(`[subtract] Impossible to subtract ${idNum1.value} - ${idNum2.value}`);

    } else{

        if (num1 != num2) {

            let contador = soma(result, 1);
            let somatorio = soma(num2, 1);
            return subtração(num1, somatorio, contador);

        } else{

            return result;

        }
    }

}

function multiplicação(num1, num2) {

    if (isNaN(num1) || isNaN(num2)) {
        
        throw new Error(`[multiply] Impossible to multiply ${idNum1.value} - ${idNum2.value}`);

    } else{
        if (num1 == 0 || num2 == 0) {

            return 0;

        } else{
            
            return soma(num1, multiplicação(num1, subtração(num2, 1, 0)));

        }
    }
}

function exponenciação(num1, num2){

    if (isNaN(num1) || isNaN(num2)) {
        
        throw new Error(`[multiply] Impossible to multiply ${idNum1.value} - ${idNum2.value}`);

    } else{

        if (num1 == 1 || num2 == 0) {

            return 1;

        } else if(num1 == 0){

            return 0;

        } else{
            
            return multiplicação(num1, exponenciação(num1, subtração(num2, 1, 0)));

        }
    }
}

function divisão(num1, num2) {
}

function calcular(){

    // Value variables
    const operador = document.querySelector("#operador").value;
    const num1 = parseInt(idNum1.value);
    const num2 = parseInt(idNum2.value);
    var idResultado = document.querySelector("#resultado");

    if(operador == "soma"){
        idResultado.innerHTML = soma(num1, num2);
    } else if(operador == "subtração"){
        idResultado.innerHTML = subtração(num1, num2, 0); 
    } else if(operador == "multiplicação"){
        idResultado.innerHTML = multiplicação(num1, num2);
    } else if(operador == "exponenciação"){
        idResultado.innerHTML = exponenciação(num1, num2);
    }else if(operador == "divisão"){
        idResultado.innerHTML = divisão(num1, num2);
    }

};

idBt.addEventListener("click", calcular);