import { prizeCard } from "./prizeCard.js";
import * as indexPag from "./indexPag.js";
import { raffle } from "./raffle.js";

const card = prizeCard();
const card2 = prizeCard();
const raffleInit = raffle(1, 75);

function main() {

    card.setCard();
    card2.setCard();
    raffleInit.setDraft();

    indexPag.showCard(0)
    indexPag.showNums(card, raffleInit, 0)

    indexPag.showCard(10)
    indexPag.showNums(card2, raffleInit, 10)

    indexPag.btInit(raffleInit, card, card2);
    indexPag.artResult();
}

main();