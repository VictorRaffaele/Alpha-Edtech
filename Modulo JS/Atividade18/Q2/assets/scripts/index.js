import * as indexPag from "./indexPage.js";

function shuffleDeck() {
    
    return new Promise((resolve, reject) => {

        fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`, {method:'GET'})
        .then(resp => {
            if (resp.status == 200) {
                return resp.json();
            } else{
                return Promise.reject("[ERROR] Reject deck error!");
            }
        })
        .then((value) => {resolve(value["deck_id"])})
        .catch(err => reject(err));
    })
}

function drawCards(_id) {
    
    return new Promise((resolve, reject) =>{

        fetch(`https://deckofcardsapi.com/api/deck/${_id}/draw/?count=1`, {method:'GET'})
        .then(resp => {
            if (resp.status == 200) {
                return resp.json();
            }else{
                return Promise.reject("[ERROR] Reject draw error!");
            }
        })
        .then((value) => {resolve(value)})
        .catch(err => reject(err));
    })
}

async function showDeck() {

    try {

        const deck = await shuffleDeck();
        indexPag.clearImgArt();
        
        for (let card = 0; card < 5; card++) {

            const draw = await drawCards(deck);
            Promise.all([deck, draw]).then((value) => indexPag.showCards(value[1].cards[0].image));
            btShow.textContent = "Sortear Novamente!";
            eventShow();
            
        }
    } catch (error) {
        console.log(error);
    }
}



function eventShow() {

    const btShow = document.querySelector('#btShow');
    btShow.addEventListener('click', showDeck);

}

indexPag.buttonShow();
indexPag.createImgArt();
eventShow();