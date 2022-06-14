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
        chat.scrollTop = chat.scrollHeight;

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

mensage.addEventListener("keyup", sendEnter);
btSend.addEventListener("click", send);
btDel.addEventListener("click", del);