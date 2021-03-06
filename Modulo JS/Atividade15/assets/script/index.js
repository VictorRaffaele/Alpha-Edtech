const coins = document.querySelector("#coins");
const begin = document.querySelector("#begin");
const final = document.querySelector("#final");
const btCalc = document.querySelector("#btCalc");
const coinPage = document.querySelector("#coinPage");
const formCoins = document.querySelector("#formCoins");
const tableResult = document.querySelector("#tableResult");

//Change the cursor on the wainting of request.
function changeCursor() {

    if (coinPage.style.cursor == '' || coinPage.style.cursor == 'default') {

        coinPage.style.cursor = 'wait';
        btCalc.style.cursor = 'wait';

    } else{

        coinPage.style.cursor = 'default';
        btCalc.style.cursor = 'default';

    }
}

//Split the "-" in received date, to use in requested url.
function splitData(date) {
    
    let aux = '';
    let dateSplit =  date.split('-');
    
    for (let index = 0; index < dateSplit.length; index++) {
       
        aux += dateSplit[index];
        
    }
    return aux;
}

function coinSelect() {

    let coin = '';

    switch (coins.value) {
        case "realDolar":
            return coin = "BRL-USD";
        case "dolarReal":
            return coin = "USD-BRL";
        case "realEuro":
            return coin = "BRL-EUR";
        case "euroReal":
            return coin = "EUR-BRL";
        case "dolarEuro":
            return coin = "USD-EUR";
        case "euroDolar":
            return coin = "EUR-USD";
    }
}

//Receive url and request API data to table.
function requestData() {

    changeCursor();
    
    if (begin.value == '' || final.value == '') {

        alert("Campo vazio, por favor preencher!");
        changeCursor();

    } else if(begin.value > final.value){

        alert("Erro na inserção da data, verifique se a data inicial é anterior a final!");

    } else {

        tableResult.style.display = 'table';

            createTable();
    
            for (let index = parseInt(splitData(final.value)); index >= parseInt(splitData(begin.value)); index--) {
                fetch(`https://economia.awesomeapi.com.br/json/daily/${coinSelect()}/?start_date=${index}}&end_date=${index}`, {method: 'GET'})
                .then(resp => resp.json())
                .then(function (obj) {  
                    
                    tableLine(obj[0].name, obj[0].bid-obj[0].varBid, obj[0].create_date, obj[0].low, obj[0].high, obj[0].bid);

                })
                .catch(e => console.log(e.msg))
            }
        setTimeout(changeCursor, 3000);
    }
}

//Make the first line in table.
function createTable() {
    
    tableResult.innerHTML = "";
    
    const trInfo = tableResult.insertRow();
    const tdName = trInfo.insertCell();
    const tdLast = trInfo.insertCell();
    const tdTime = trInfo.insertCell();
    const tdMinValue = trInfo.insertCell();
    const tdMaxValue = trInfo.insertCell();
    const tdValue = trInfo.insertCell();

    tdName.innerText = "Moeda";
    tdLast.innerText = "Ultima Cotação";
    tdTime.innerText = "Data e Hora";
    tdMinValue.innerHTML = "Valor Minimo";
    tdMaxValue.innerHTML = "Valor Maximo";
    tdValue.innerHTML = "Valor de Fechamento";

}

//Make a new line in table and receive they content.
function tableLine(name, last, time, minValue, maxValue, value) {

    const tr = tableResult.insertRow();
    const td_name = tr.insertCell();
    const td_last = tr.insertCell();
    const td_time = tr.insertCell();
    const td_minValue = tr.insertCell();
    const td_maxValue = tr.insertCell();
    const td_value = tr.insertCell();

    td_name.innerText = name;
    td_last.innerText = last;
    td_time.innerText = time;
    td_minValue.innerText = minValue;
    td_maxValue.innerText = maxValue;
    td_value.innerText = value;

}

btCalc.addEventListener("click", requestData);
formCoins.addEventListener("submit", e => {e.preventDefault();});