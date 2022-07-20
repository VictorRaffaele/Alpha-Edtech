import * as indexPag from "./indexPag.js";
let result = null;
let resultClimate = null;

//Return value of state input.
function selectUF() {
    return state.value;
}

//Make a request to IBGE's API.
function requestUF() {
    const UF = selectUF();
    indexPag.clearTemp();

    return new Promise((resolve, reject) => {
        document.querySelector('body').style.cursor = 'wait';
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/distritos`, {method: 'GET'})
        .then(resp => {
              
            if (resp.status == 200) {
                document.querySelector('body').style.cursor = 'default';
                return resp.json();
            } else {
                return Promise.reject("[ERROR] Objeto não encontrado!");
            }
        })
        .then((value) => {
            resolve(value);
        })
        .catch(err => reject(err));
    })
}

//Add content for select.
function selectAdd(req) {
    indexPag.clearOption();
    indexPag.showSelect();

    for (let index = 0; index < req.length; index++) {
        indexPag.optionCity(req[index].nome);
    }

    stateEvent();
    climateSet();
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
function requestClimate(req) {

    return new Promise((resolve, reject) => {

        for (let index = 0; index < req.length; index++) {
        
            if (req[index].nome == city.value) {
                const geoLoc = req[index].id.slice(0,-2);
                document.querySelector('body').style.cursor = 'wait';
                fetch(`https://apiprevmet3.inmet.gov.br/previsao/${geoLoc}`, {method: 'GET'})
                .then(resp => {
                    if (resp.status == 200) {
                        document.querySelector('body').style.cursor = 'default';
                        return resp.json();
                    } else {
                        return Promise.reject("[ERROR] Objeto não encontrado!");
                    }
                })
                .then((value) => {
                    resolve(value[geoLoc]);
                })
                .catch(err => reject(err));
            }
        }
    })
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
function showTemp(req) {

    indexPag.clearTemp();

    for (let day = 0; day < 2; day++) {

        if (day == 0) {
            indexPag.createTemp(day);
            addTemp(day, dateToday(day), req[`${dateToday(day)}`].manha.dia_semana, req[`${dateToday(day)}`].manha.resumo, req[`${dateToday(day)}`].manha.temp_min, req[`${dateToday(day)}`].manha.temp_max);
            indexPag.createTemp(day+1)
            addTemp(day+1, dateToday(day), req[`${dateToday(day)}`].tarde.dia_semana, req[`${dateToday(day)}`].tarde.resumo, req[`${dateToday(day)}`].tarde.temp_min, req[`${dateToday(day)}`].tarde.temp_max);
            indexPag.createTemp(day+2);
            addTemp(day+2, dateToday(day), req[`${dateToday(day)}`].noite.dia_semana, req[`${dateToday(day)}`].noite.resumo, req[`${dateToday(day)}`].noite.temp_min, req[`${dateToday(day)}`].noite.temp_max)

        } else if (day == 1) {
            indexPag.createTemp(day+2);
            addTemp(day+2, dateToday(day), req[`${dateToday(day)}`].manha.dia_semana, req[`${dateToday(day)}`].manha.resumo, req[`${dateToday(day)}`].manha.temp_min, req[`${dateToday(day)}`].manha.temp_max);
            indexPag.createTemp(day+3)
            addTemp(day+3, dateToday(day), req[`${dateToday(day)}`].tarde.dia_semana, req[`${dateToday(day)}`].tarde.resumo, req[`${dateToday(day)}`].tarde.temp_min, req[`${dateToday(day)}`].tarde.temp_max);
            indexPag.createTemp(day+4);
            addTemp(day+4, dateToday(day), req[`${dateToday(day)}`].noite.dia_semana, req[`${dateToday(day)}`].noite.resumo, req[`${dateToday(day)}`].noite.temp_min, req[`${dateToday(day)}`].noite.temp_max)
        }
    }

    for (let day = 2; day < 4; day++) {

        indexPag.createTemp(day+4);
        addTemp(day+4, dateToday(day), req[`${dateToday(day)}`].dia_semana, req[`${dateToday(day)}`].resumo, req[`${dateToday(day)}`].temp_min, req[`${dateToday(day)}`].temp_max);     
  
    }
    stateEvent();
    climateSet();
}

//Get the Promise and pass to select box.
async function getUF() {

    const req = await requestUF();
    selectAdd(req);
    
}

//Get the Promises and show on page.
async function getClimate() {

    const req = await requestUF();
    const climate = await requestClimate(req);
    showTemp(climate);

}

//Set event change to state input 
function stateEvent() {
    const state = document.querySelector("#state");

    state.addEventListener("change", getUF);
}

//Set event change to city input 
function climateSet() {
    const city = document.querySelector("#city");

    city.addEventListener("change", getClimate);
}

indexPag.loadIndex();
stateEvent();
