
const main = document.querySelector('main');

export function showCard(num) {

    const label = document.createElement('label');
    const card = document.createElement('table');
    const trLine = card.insertRow();

    label.for = 'table';
    label.textContent = 'Cartela:';

    for (let index = 0 + num; index < 10 + num; index++) {

        const tdNum = trLine.insertCell();
        tdNum.id = `td${index}`;

    }

    main.appendChild(label);
    main.appendChild(card);

}

function mark(_raffle, table) {

    if (_raffle.getDrafted().includes(parseInt(table.innerHTML))) {

        table.style.textDecoration = "line-through";

    }
}

export function showNums(_card, _raffle, num) {

    for (let index = 0 + num; index < 10 + num; index++) {

        const table = document.querySelector(`#td${index}`);
        table.innerHTML = _card.getCardNum(index - num);
        table.addEventListener('click', function () {
       
            _card.markNum(`${table.innerHTML}`, _raffle);
            mark(_raffle, table);
       
        });

    }

}

export function artResult() {

    const art = document.createElement('article');
    art.id = 'artResult';
    main.appendChild(art);

}

function showPrize(num) {

    const artResult = document.querySelector("#artResult");
    artResult.innerHTML += ' ' + num + ' ';

}

function prize(_raffle, _card, _card2, _interval, _btInit) {

    if (_card.completed() == true ) {
    
        alert("Jogador da cartela 1 ganhou!");
        clearInterval(_interval);

        document.location.reload(true);
    
    } else if (_card2.completed() == true){

        alert("Jogador da cartela 2 ganhou!");
        clearInterval(_interval);
        document.location.reload(true);

    }else {
       
        if (_raffle.getDraft().length == _raffle.getDrafted().length) {
       
            alert("Acabaram os números");
            clearInterval(_interval);
            _btInit.disabled = false;

        } else {
       
            _raffle.draftNum()
            showPrize(_raffle.getDrafted()[_raffle.getDrafted().length - 1]);
       
        }
    }
}

export function btInit(_raffle, _card, _card2) {

    const btInit = document.createElement('button');
    btInit.textContent = 'Iniciar';

    btInit.addEventListener('click', function () {

        const interval = setInterval(function () {
       
            prize(_raffle, _card, _card2, interval, btInit);
       
        }, 5000);
        
        prize(_raffle, _card, _card2);
        interval;
        btInit.disabled = true;
        btInit.innerHTML = 'Bingo';

    })

    main.appendChild(btInit);

}