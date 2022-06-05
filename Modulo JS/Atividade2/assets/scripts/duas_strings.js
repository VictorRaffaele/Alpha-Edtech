const formComp = document.querySelector("#compText");

formComp.addEventListener("submit",  function(compare){

    compare.preventDefault();

    const idText1 = document.querySelector("#text1");
    const text1 = idText1.value;
    const idText2 = document.querySelector("#text2");
    const text2 = idText2.value;

    if(text1 && text2 != null && text2 && text1 != null){
        if(text1.length > text2.length){
            alert("O tamanho de: " + text1 + " é maior que o tamanho de: " + text2);
        } else if (text1.length < text2.length) {
            alert("O tamanho de: " + text1 + " é menor que o tamanho de: " + text2);
        } else {
            alert("Os tamanhos são iguais!");
        }
    } else{
        alert("Preencha o campo vazio!");
    }

})