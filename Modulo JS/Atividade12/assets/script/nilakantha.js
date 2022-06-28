const formNila = document.querySelector("#formNila");
const btFind = document.querySelector("#btFind");
const number = document.querySelector("#number");

function findPi() {
   
    let pi = 0;
    let cont = 3;

    for (let index = 2; index <= 1000000; index+=2) {
        if (cont % 2 == 1) {

            pi += 1/(index * (index+1) * (index+2));
            cont++;

        } else{

            pi -= 1/(index * (index+1) * (index+2));
            cont++;

        }
        console.log(index)
    }

    pi = pi * 4 + 3;
    return pi;

}

function showPi() {
    
    number.textContent = findPi().toFixed(100);

}

btFind.addEventListener("click", showPi);
formNila.addEventListener("submit", e => {e.preventDefault();});