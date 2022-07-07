//Imports
import * as index from "./indexPage.js";
import * as validation from "./cepValidation.js";
import * as insert from "./textInsert.js";

//Change the disabled status of button
function btStatus() {

    if(validation.valid() == false){

        btSearch.disabled = true;

    } else{

        btSearch.disabled = false;

    }
}

//Change the status of page for wainting and disable the interactions.
function changeStatus() {

    if (document.body.style.cursor == '' || document.body.style.cursor == 'default') {

        document.body.style.cursor = 'wait';
        btSearch.style.cursor = 'wait';
        cep.style.cursor = 'wait';
        cep.disabled = true;
        btShowMap.style.cursor = 'wait'
        btShowMap.disabled = true;
        btStatus();

    } else{

        document.body.style.cursor = 'default';
        btSearch.style.cursor = 'default';
        cep.style.cursor = 'default';
        cep.disabled = false;
        btShowMap.style.cursor = 'default';
        btShowMap.disabled = false;
        btStatus();

    }
}

//Reset the values to request.
function clearRequest(visib) {

    index.createResult();
    btShowMap.style.visibility = visib;
    map.innerHTML = ''
    
}

//Request the API cep with the entry cep and show the result.
function requestCep() {
    
    fetch(`https://cep.awesomeapi.com.br/json/${cep.value}`, {method: 'GET'})
    .then(resp => resp.json())
    .then(request => {

        if(request.status == 404 || request.status == 400){

            console.error("CEP inválido!");
            clearRequest('hidden');

        } else{

            clearRequest('visible');
            insert.result(request.address, request.district, request.city, request.state, request.lat, request.lng);
            changeStatus();
            setTimeout(changeStatus, 2000);

        }
    })
}

//Set events in elements.
function eventSet() {
    
    const cep = document.querySelector("#cep");
    const btSearch = document.querySelector("#btSearch");

    btSearch.addEventListener("click", requestCep);
    cep.addEventListener("input", btStatus);
    cep.addEventListener("input", validation.confirm);
    cep.addEventListener("keyup", validation.fixLength);
    
}

index.mainPage();
eventSet();