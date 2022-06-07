const idCalc = document.querySelector("#calcular");

function calcular() {

    const peso = parseFloat(document.querySelector("#peso").value);
    const altura = parseFloat(document.querySelector("#altura").value);
    const idResult = document.querySelector("#textResult");


    if(isNaN(peso) || isNaN(altura)){

        alert("Digite um valor numérico!");

    } else{

        const resultado = peso / (altura * altura);

        if (resultado <= 18.5) {

            idResult.textContent = `Resultado: ${resultado.toFixed(2)} - Abaixo do Peso`;

        } else if(resultado > 18.5 && resultado <= 24.99){

            idResult.textContent = `Resultado: ${resultado.toFixed(2)} - Peso Normal`;

        } else if(resultado > 25 && resultado <= 29.99){

            idResult.textContent = `Resultado: ${resultado.toFixed(2)} - Sobrepeso`;

        } else{

            idResult.textContent = `Resultado: ${resultado.toFixed(2)} - Obesidade`;

        }
    }
}

idCalc.addEventListener("click", calcular);