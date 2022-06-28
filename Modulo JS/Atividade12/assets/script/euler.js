const entry = document.querySelector("#entry");
const result = document.querySelector("#result");
const fact = document.querySelector("#fact");
const btCalc = document.querySelector("#btCalc");
const formEuler = document.querySelector("#formEuler");

function factorial(num) {
    
    let mult = 1;

    if (num == 0 || num == 1) {
        console.log(mult)

        return mult;
        

    } else{

        for (let index = 0; index < (entry.value); index++) {

            mult *= num;
            num--;
    
        }
    }

    return mult;
}

function euler() {
    
    let sum = 0;
    let num = entry.value;

    sum = (1+1/factorial(num))**factorial(num);

    return sum;

}

function showResult() {

    fact.textContent = "Fatorial: ";
    result.textContent = "Número de Euler: ";
    fact.textContent += factorial(entry.value);
    result.textContent += euler();
 
}

function enterResult(e) {

    if(e.code == "Enter" || e.code == "NumpadEnter"){

        showResult();
    
    }
}

btCalc.addEventListener("click", showResult);
formEuler.addEventListener("submit", e => {e.preventDefault();});
entry.addEventListener("keyup", enterResult);