const formComp = document.querySelector("#compNum");

formComp.addEventListener("submit", function(compare){

    compare.preventDefault();

    const idNum1 = document.querySelector("#num1");
    const num1 = idNum1.value;
    const idNum2 = document.querySelector("#num2");
    const num2 = idNum2.value;

    if(num1 && num2 != null && num2 && num1 != null){
        if(num1 > num2){
            alert(num1 + " é maior que " + num2);
        } else if (num1 < num2) {
            alert(num1 + " é menor que " + num2);
        } else {
            alert("São iguais!");
        }
    } else{
        alert("Preencha o campo vazio!");
    }
});
