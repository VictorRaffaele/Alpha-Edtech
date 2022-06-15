const btVisualizar = document.querySelector("#btVisualizar");

let obj = {}

function show() {
    
    obj = {"Um atributo com espaços" : 1};
    console.log(obj["Um atributo com espaços"]);
    console.log(Object.values(obj)[0]); 
}

btVisualizar.addEventListener("click", show);