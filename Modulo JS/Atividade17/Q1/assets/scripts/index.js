import * as indexPag from "./indexPag.js";
let result = null;
let resultClimate = null;

//Return value of state input.
function selectUF() {
    return state.value;
}

//Add content for select.
function selectAdd(req) {
    indexPag.clearOption();
    indexPag.showSelect();

    for (let index = 0; index < req.length; index++) {
        indexPag.optionCity(req[index].nome);
    }
}

//Make a request to IBGE's API.
function requestUF() {
    const UF = selectUF();
    indexPag.clearTemp();

    const promiseUF = new Promise((resolve, reject) => {
        
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/distritos`, {method: 'GET'})
        .then(resp => {
              
            if (resp.status == 200) {
                resolve(resp.json());
            } else {
                reject("[ERROR] Objeto não encontrado!");
            }
        })
    })

    promiseUF.then((value) => {
       
        result = value;
        selectAdd(value);
        stateEvent();
        climateSet();
    
    })
    promiseUF.catch(err => console.log(err));
}

//Take the date of day for requestClimate.
function dateToday(skip) {
    const date = new Date();
    const day = date.getDate() + skip;
    let mes = '';

    if (date.getUTCMonth() < 10) {
        mes = '0' + (date.getUTCMonth()+1);
    }else{
        mes = (date.getUTCMonth()+1);
    }
    return day +'/'+ mes +'/'+ date.getUTCFullYear()
}

//Make a request to INM's API.
function requestClimate() {
    
    const promiseClimate = new Promise((resolve, reject) => {

        for (let index = 0; index < result.length; index++) {
        
            if (result[index].nome == city.value) {
                const geoLoc = result[index].id.slice(0,-2);

                fetch(`https://apiprevmet3.inmet.gov.br/previsao/${geoLoc}`, {method: 'GET'})
                .then(resp => {
                    if (resp.status == 200) {
                        resolve(resp.json());
                    } else {
                        reject("[ERROR] Objeto não encontrado!");
                    }
                })
            }
        }
    })

    promiseClimate.then((value) => {

        resultClimate = value;
        showTemp();
        
    })
    promiseClimate.catch(err => console.log(err));
}

//Pass the parameters for DOM's elements.
function addTemp(id, entryDate, entryDay, entryPrev, entryMin, entryMax) {
    
    const date = document.querySelector(`#date${id}`);
    const day = document.querySelector(`#day${id}`);
    const prev = document.querySelector(`#prev${id}`);
    const tempMin = document.querySelector(`#tempMin${id}`);
    const tempMax = document.querySelector(`#tempMax${id}`);

    if (id == 0 || id == 3) {
        date.innerHTML += entryDate + '<br> Periodo: Manha';
    } else if (id == 1 || id == 4) {
        date.innerHTML = 'Periodo: Tarde';
    }else if (id == 2 || id == 5) {
        date.innerHTML = 'Periodo: Noite';

    }else {
        date.innerHTML += entryDate;
    }
    day.innerHTML += entryDay;
    prev.innerHTML += entryPrev;
    tempMin.innerHTML += entryMin;
    tempMax.innerHTML += entryMax;

}

//Request Promise data and use addTemp to show on page.
function showTemp() {

    for (let index = 0; index < result.length; index++) {
            
        if (result[index].nome == city.value) {
            const obj = resultClimate[result[index].id.slice(0,-2)];
            indexPag.clearTemp();

            for (let day = 0; day < 2; day++) {

                if (day == 0) {
                    indexPag.createTemp(day);
                    addTemp(day, dateToday(day), obj[`${dateToday(day)}`].manha.dia_semana, obj[`${dateToday(day)}`].manha.resumo, obj[`${dateToday(day)}`].manha.temp_min, obj[`${dateToday(day)}`].manha.temp_max);
                    indexPag.createTemp(day+1)
                    addTemp(day+1, dateToday(day), obj[`${dateToday(day)}`].tarde.dia_semana, obj[`${dateToday(day)}`].tarde.resumo, obj[`${dateToday(day)}`].tarde.temp_min, obj[`${dateToday(day)}`].tarde.temp_max);
                    indexPag.createTemp(day+2);
                    addTemp(day+2, dateToday(day), obj[`${dateToday(day)}`].noite.dia_semana, obj[`${dateToday(day)}`].noite.resumo, obj[`${dateToday(day)}`].noite.temp_min, obj[`${dateToday(day)}`].noite.temp_max)
        
                } else if (day == 1) {
                    indexPag.createTemp(day+2);
                    addTemp(day+2, dateToday(day), obj[`${dateToday(day)}`].manha.dia_semana, obj[`${dateToday(day)}`].manha.resumo, obj[`${dateToday(day)}`].manha.temp_min, obj[`${dateToday(day)}`].manha.temp_max);
                    indexPag.createTemp(day+3)
                    addTemp(day+3, dateToday(day), obj[`${dateToday(day)}`].tarde.dia_semana, obj[`${dateToday(day)}`].tarde.resumo, obj[`${dateToday(day)}`].tarde.temp_min, obj[`${dateToday(day)}`].tarde.temp_max);
                    indexPag.createTemp(day+4);
                    addTemp(day+4, dateToday(day), obj[`${dateToday(day)}`].noite.dia_semana, obj[`${dateToday(day)}`].noite.resumo, obj[`${dateToday(day)}`].noite.temp_min, obj[`${dateToday(day)}`].noite.temp_max)
                }
            }
        
            for (let day = 2; day < 4; day++) {
        
                indexPag.createTemp(day+4);
                addTemp(day+4, dateToday(day), obj[`${dateToday(day)}`].dia_semana, obj[`${dateToday(day)}`].resumo, obj[`${dateToday(day)}`].temp_min, obj[`${dateToday(day)}`].temp_max);     
          
            }
            stateEvent();
            climateSet();
        }
    }
}

//Set event change to state input 
function stateEvent() {
    const state = document.querySelector("#state");

    state.addEventListener("change", requestUF);
}

//Set event change to city input 
function climateSet() {
    const city = document.querySelector("#city");

    city.addEventListener("change", requestClimate);
}

indexPag.loadIndex();
stateEvent();
