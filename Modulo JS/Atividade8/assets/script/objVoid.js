const btVisualizar = document.querySelector("#btVisualizar");

let obj = {}

function show() {
    
    obj["Um atributo com espaços"] = 1;
    console.log(obj["Um atributo com espaços"]);
    Object.defineProperty(obj, "Outra chave", {value : 2});
    console.log(Object.values(obj)[0]); 
}

btVisualizar.addEventListener("click", show);