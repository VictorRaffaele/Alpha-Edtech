const formPrime = document.querySelector("#formPrime");
const btFind = document.querySelector("#btFind");
const number = document.querySelector("#number");

function primeFind() {

    let numbers = '';

    for (let interval = 0; interval <= 100000; interval++) {

        let div = 0;

        for (let index = 0; index <= interval; index++) {
        
            if (interval % index == 0) {
                
                div++;
    
            }
        }
        
        if (div == 2) {

            numbers += interval + " ";
        
        }
    }
    return numbers;
}


function showNumbers() {
    
    number.textContent += primeFind(); 

}

btFind.addEventListener("click", showNumbers);
formPrime.addEventListener("submit", e => {e.preventDefault();});