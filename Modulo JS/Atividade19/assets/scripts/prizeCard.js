export function prizeCard() {
    
    let card = [];

    function markNum(num, _raffle) {

        if (_raffle.getDrafted().includes(parseInt(num))) {

            for (let index = 0; index < card.length; index++) {
               
                if (card[index].num == num) {
                   
                    card[index].status = true;
                }
            }
        }
    }

    function completed() {

        let cont = 0;
        
        for (let index = 0; index < card.length; index++) {
           
            if (card[index].status == true) {
        
                cont++;
        
            }
        }

        if (cont == 10) {
        
            return true;
        
        } else {

            return false;
        
        }
    }

    function setCard() {

        let result = Math.floor(Math.random() * (75 - 1 + 1)) + 1;

        if (card.length > 0) {
           
            for (let index = 0; card.length < 10; index++) {

                result = Math.floor(Math.random() * (75 - 1 + 1)) + 1;

                if (card[index].num == result) {

                    setCard();

                } else {

                    card.push({ 'num': result, 'status': false });

                }
            }
        } else {

            card.push({ 'num': result, 'status': false });
            setCard();

        }
    }

    function getCard() {

        return card;

    }

    function getCardNum(index) {

        return card[index].num;

    }

    return {
        markNum,
        completed,
        setCard,
        getCard,
        getCardNum
    }
}