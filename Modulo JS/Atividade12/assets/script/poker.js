const table = document.querySelector("#table");
const cards = document.querySelector("#cards");
const result = document.querySelector("#result");
const btDeal = document.querySelector("#btDeal");
const naipeResult = document.querySelector("#naipeResult");

let deck = []; //Cards Array

//Select card suit
function naipeChoice(card, naipe) {
    
    if (naipe == 0) {
        card.naipe = "copas";
    } else if(naipe == 1){
        card.naipe = "espada";
    } else if(naipe == 2){
        card.naipe = "ouro";
    } else{
        card.naipe = "paus";
    }
}

//Create cards objects with suit and value
function createCards() {

    for (let index = 1; index <= 13; index++) {

        if (index == 1) {
                    
            for (let naipe = 0; naipe < 4; naipe++) {
                const card = new Object;

                card.valor = "A";
                naipeChoice(card, naipe);
                deck.push(card);

            }

        } else if (index == 11) {

            for (let naipe = 0; naipe < 4; naipe++) {
                const card = new Object;

                card.valor = "J";
                naipeChoice(card, naipe);
                deck.push(card);

            }

        } else if (index == 12) {

            for (let naipe = 0; naipe < 4; naipe++) {
                const card = new Object;

                card.valor = "Q";
                naipeChoice(card, naipe);
                deck.push(card);
            }

        } else if (index == 13){

            for (let naipe = 0; naipe < 4; naipe++) {
                const card = new Object;

                card.valor = "K";
                naipeChoice(card, naipe);
                deck.push(card);
            }

        } else {

            for (let naipe = 0; naipe < 4; naipe++) {
                const card = new Object;

                card.valor = index;
                naipeChoice(card, naipe);
                deck.push(card);
            }
        }
    }
}

//Shuffle cards in deck array
function shuffleDeck(array) {
    let currentIndex = array.length;
  
    while (currentIndex != 0) {
  
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];

    }  
    return array;
}

//Use auxiliary array to keep the dealts cards
function dealCards() {

    const dealCards = []

    shuffleDeck(deck);

    for (let index = 0; index < 5; index++) {

        dealCards.push(deck[index]);

    }

    showCards(dealCards);

    return dealCards; 
}

//Insert cards images
function showCards(dealCards) {
    
    cards.innerHTML = ''
    for (let index = 0; index < dealCards.length; index++) {
        
        if (dealCards[index].naipe == 'ouro') {
            
            cards.innerHTML += `<img src="./assets/images/${dealCards[index].valor}D.svg" alt="img"/>`
        } else if (dealCards[index].naipe == 'espada') {
            cards.innerHTML += `<img src="./assets/images/${dealCards[index].valor}S.svg" alt="img"/>`

        } else if (dealCards[index].naipe == 'copas') {
            cards.innerHTML += `<img src="./assets/images/${dealCards[index].valor}H.svg" alt="img"/>`

        } else{
            cards.innerHTML += `<img src="./assets/images/${dealCards[index].valor}C.svg" alt="img"/>`

        }
    }
}

function gameResult() {
    
    const deal = dealCards();

    deal.sort((a,b) => {
        if (a.valor > b.valor) {
            return 1;
          }
          if (a.valor < b.valor) {
            return -1;
          }
          return 0;
    });
    
    if (deal[0].naipe == deal[1].naipe && deal[1].naipe == deal[2].naipe && deal[2].naipe == deal[3].naipe && deal[3].naipe == deal[4].naipe) {

        if (deal[0].valor == 'A' && deal[2].valor == 'K' && deal[3].valor == 'Q' && deal[1].valor == 'J' && deal[4].valor == 10) {

            result.textContent = "Parabéns você tem um Royal Flush!";

        } else if (deal[0].valor+1 == deal[1].valor && deal[1].valor+1 == deal[2].valor && deal[2].valor+1 == deal[3].valor && deal[3].valor+1 == deal[4].valor) {

            result.textContent = "Parabéns você tem uma Straight Flush!";
            
        } else if (deal[0].valor == 'A' && deal[1].valor == 2 && deal[1].valor+1 == deal[2].valor && deal[2].valor+1 == deal[3].valor && deal[3].valor+1 == deal[4].valor) {
    
            result.textContent = "Parabéns você tem uma Straight Flush!";
            
        } else if (deal[0].valor == 'J' && deal[4].valor == 10 && deal[1].valor+1 == deal[2].valor && deal[2].valor+1 == deal[3].valor && deal[3].valor+1 == deal[4].valor) {
            
            result.textContent = "Parabéns você tem uma Straight Flush!";
    
        } else if (deal[0].valor == 'J' && deal[1].valor == 'Q' && deal[4].valor == 10 && deal[2].valor+1 == deal[3].valor && deal[3].valor+1 == deal[4].valor) {
            
            result.textContent = "Parabéns você tem uma Straight Flush!";
    
        } else if (deal[0].valor == 'J' && deal[1].valor == 'K' && deal[2].valor == 'Q' && deal[3].valor == 9 && deal[4].valor == 10) {
            
            result.textContent = "Parabéns você tem uma Straight Flush!";
    
        } else{

            result.textContent = "Parabéns você tem um Flush!";

        }
        
    } else if (deal[0].valor == deal[1].valor && deal[1].valor == deal[2].valor && deal[2].valor == deal[3].valor || deal[1].valor == deal[2].valor && deal[2].valor == deal[3].valor && deal[3].valor == deal[4].valor) {

        result.textContent = "Parabéns você tem uma Quadra!";

    } else if(deal[0].valor == deal[1].valor && deal[1].valor == deal[2].valor && deal[3].valor == deal[4].valor || deal[0].valor == deal[1].valor && deal[2].valor == deal[3].valor && deal[3].valor == deal[4].valor){

        result.textContent = "Parabéns você tem um Full House!";

    } else if (deal[0].valor+1 == deal[1].valor && deal[1].valor+1 == deal[2].valor && deal[2].valor+1 == deal[3].valor && deal[3].valor+1 == deal[4].valor) {

        result.textContent = "Parabéns você tem uma Sequência!";
        
    } else if (deal[0].valor == 'A' && deal[1].valor == 2 && deal[1].valor+1 == deal[2].valor && deal[2].valor+1 == deal[3].valor && deal[3].valor+1 == deal[4].valor) {

        result.textContent = "Parabéns você tem uma Sequência!";
        
    } else if (deal[0].valor == 'J' && deal[4].valor == 10 && deal[1].valor+1 == deal[2].valor && deal[2].valor+1 == deal[3].valor && deal[3].valor+1 == deal[4].valor) {
        
        result.textContent = "Parabéns você tem uma Sequência!";

    } else if (deal[0].valor == 'J' && deal[1].valor == 'Q' && deal[4].valor == 10 && deal[2].valor+1 == deal[3].valor && deal[3].valor+1 == deal[4].valor) {
        
        result.textContent = "Parabéns você tem uma Sequência!";

    } else if (deal[0].valor == 'J' && deal[1].valor == 'K' && deal[2].valor == 'Q' && deal[3].valor == 9 && deal[4].valor == 10) {
        
        result.textContent = "Parabéns você tem uma Sequência!";

    }  else if (deal[0].valor == 'A' && deal[1].valor == 'J' && deal[2].valor == 'K' && deal[3].valor == 'Q' && deal[4].valor == 10) {
        
        result.textContent = "Parabéns você tem uma Sequência!";

    } else if(deal[0].valor == deal[1].valor && deal[1].valor == deal[2].valor || deal[1].valor == deal[2].valor && deal[2].valor == deal[3].valor || deal[2].valor == deal[3].valor && deal[3].valor == deal[4].valor){

        result.textContent = "Parabéns você tem uma Trinca!";

    } else if(deal[0].valor == deal[1].valor && deal[2].valor == deal[3].valor || deal[0].valor == deal[1].valor && deal[3].valor == deal[4].valor || deal[1].valor == deal[2].valor && deal[3].valor == deal[4].valor){

        result.textContent = "Parabéns você tem Dois Pares!";

    } else if(deal[0].valor == deal[1].valor || deal[1].valor == deal[2].valor || deal[2].valor == deal[3].valor || deal[3].valor == deal[4].valor){

        result.textContent = "Parabéns você tem um Par!";
        
    } else{

        result.textContent = "Você não tem Nada!";

    }
}

createCards();
btDeal.addEventListener("click", gameResult);