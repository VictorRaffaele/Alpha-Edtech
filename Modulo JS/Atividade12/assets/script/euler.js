const entry = document.querySelector("#entry");
const result = document.querySelector("#result");
const btCalc = document.querySelector("#btCalc");

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
    
    let sum = 0
    let num = entry.value;

    sum = (1+1/factorial(num))**factorial(num);

    return sum;

}

function showResult() {

    result.textContent = euler();
 
}

btCalc.addEventListener("click", showResult);