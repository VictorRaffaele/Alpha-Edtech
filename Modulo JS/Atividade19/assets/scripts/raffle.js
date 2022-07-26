export function raffle(_min, _max) {

    let draft = []
    let drafted = []

    function setDraft() {

        let max = _max;
        let min = _min;

        for (min; min < max + 1; min++) {

            draft.push(min);

        }
    }

    function verifyDraft(result) {

        if (drafted.includes(result)) {

            draftNum();

        } else {

            drafted.push(result);

        }
    }

    function draftNum() {

        let result = Math.floor(Math.random() * ((_max) - _min + 1)) + _min;

        if (draft.includes(result)) {

            verifyDraft(result);

        }
    }

    function getDraft() {

        return draft;

    }

    function getDrafted() {

        return drafted;

    }

    return {
        setDraft, 
        getDraft, 
        getDrafted, 
        draftNum
    }
}