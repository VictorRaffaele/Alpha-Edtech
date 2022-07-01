const elementos = document.querySelectorAll('button');
const btAgain = document.querySelector("#btAgain");
const result = document.querySelector("#result");
let played = [['', '', ''] , ['', '', ''] , ['', '', '']];

//Set Buttons IDs
function setID() {

    for (let index = 0; index < 9; index++) {
        
        elementos[index].id = index;
        elementos[index].setAttribute("onclick", `mark(${index})`);

    }
}

//Try play X in empty space
function mark(index) {

    if (elementos[index].innerHTML == '') {

        elementos[index].innerHTML = "X";
        play(index, 'X');

        if (final() == 0) {
            
            enemy(getRandom());

        }
    }
}

//Try play O in empty space
function enemy(index) {

    if (elementos[index].innerHTML == '') {

        elementos[index].innerHTML = 'O';
        play(index, 'O');
        final();

    } else{

        enemy(getRandom());
        final();

    }
}

//Save the move in array
function play(coluna, who) {
    
    if (coluna < 3) {

        played[0][coluna] = who;

    } else if (coluna < 6) {

        played[1][coluna-3] = who;

    } else{

        played[2][coluna-6] = who;

    }
}

//Generate a random number for enemy move
function getRandom() {

    return Math.floor(Math.random() * (10 - 1));

}

//Confirm who is the winner
function confirm() {

    for (let linha = 0; linha < played.length; linha++) {

        for (let coluna = 0; coluna < played.length; coluna++) {

            //Win by line
            if(played[linha][coluna] == 'X' && played[linha][coluna+1] == 'X' && played[linha][coluna+2] == 'X') {
                
                return 1;

            //Lose by line
            } else if(played[linha][coluna] == 'O' && played[linha][coluna+1] == 'O' && played[linha][coluna+2] == 'O') {
               
                return 2;

            //Win by column
            } else if(played[0][coluna] == 'X' && played[1][coluna] == 'X' && played[2][coluna] == 'X') {

                return 1;

            //Lose by line
            } else if(played[0][coluna] == 'O' && played[1][coluna] == 'O' && played[2][coluna] == 'O') {

                return 2;
            } 
        }
    }

    //Win by main diagonal
    if(played[0][0] == 'X' && played[1][1] == 'X' && played[2][2] == 'X') {
        
        return 1;

    //Lose by main diagonal
    } else if(played[0][0] == 'O' && played[1][1] == 'O' && played[2][2] == 'O') {
           
        return 2;

    }

    //Win by secondary diagonal
    if(played[0][2] == 'X' && played[1][1] == 'X' && played[2][0] == 'X') {
        
        return 1;

    //Lose by secondary diagonal
    } else if(played[0][2] == 'O' && played[1][1] == 'O' && played[2][0] == 'O') {
           
        return 2;

    }
    
    //Draw
    if(played[0][0] != '' && played[0][1] != '' && played[0][2] != '' && played[1][0] != '' && played[1][1] != '' && played[1][2] != '' && played[2][0] != '' && played[2][1] != '' && played[2][2] != ''){
      
        return 3;
    
    }
    return 0;
}

//Show the mensage of winner and reset button
function final() {
    
    if (confirm() == 1) {

        result.textContent = "Você Venceu!";
        btAgain.style.display = "block";
        return 1;
    
    } else if (confirm() == 2) {
        
        result.textContent = "Você Perdeu!";
        btAgain.style.display = "block";
        return 2;

    } else if (confirm() == 3) {
        
        result.textContent = "Empate"
        btAgain.style.display = "block";
        return 3;
    }

    return 0;

}

//Empties the array and buttons content
function resetGame() {
    
    result.textContent = "";
    btAgain.style.display = "none";

    for (let index = 0; index < 9; index++) {

        elementos[index].textContent = '';
        
    }

    for (let linha = 0; linha < played.length; linha++) {
        
        for (let coluna = 0; coluna < played.length; coluna++) {

            played[linha][coluna] = '';
            
        }
    }
}

setID();
btAgain.addEventListener("click", resetGame);