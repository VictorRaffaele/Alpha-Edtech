const btCadastrar = document.querySelector("#btCadastrar");

function convertJSON() {
    
    try{
        const objeto = JSON.parse(document.querySelector("#data").value);
        alert("Parsable JSON string!");
        console.log(objeto);
    } catch(error){
        alert("Não foi possivel converter, tente novamente!");
    }
}

btCadastrar.addEventListener("click", convertJSON);