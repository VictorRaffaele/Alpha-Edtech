const mensage = document.querySelector("#mensage");
const chat = document.querySelector("#chat");
const btSend = document.querySelector("#btSend");
const btDel = document.querySelector("#btDel");

function send() {

    if(mensage.value == ""){

        alert("Digite uma mensagem!");

    } else{

        chat.textContent += mensage.value + "\n";
        btDel.style.display = "inline";

    }
}

function sendEnter(e) {
    
    if(e.code == "Enter" || e.code == "NumpadEnter"){
        send();
    }
}

function del() {

    chat.textContent = "";
    btDel.style.display = "none";
    
}

function roll(){

    chat.scrollTop = mensage.scrollHeight;
    
}

mensage.addEventListener("keyup", sendEnter);
chat.addEventListener("input", roll);
btSend.addEventListener("click", send);
btDel.addEventListener("click", del);