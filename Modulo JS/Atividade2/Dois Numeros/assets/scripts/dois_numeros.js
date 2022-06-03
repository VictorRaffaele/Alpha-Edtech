const formComp = document.querySelector("#compare");

formComp.addEventListener("submit", function(compare){

    compare.preventDefault();

    const idNum1 = document.querySelector("#num1");
    const numA = idNum1.value;
    const idNum2 = document.querySelector("#num2");
    const numB = idNum2.value;

    if(numA && numB != null && numB && numA != null){
        if(numA > numB){
            console.log(numA);
            console.log(numB);

            alert(numA + " é maior que " + numB);
        } else if (numA < numB) {
            console.log(numA);
            console.log(numB);
            alert(numA + " é menor que " + numB);
        } else {
            console.log(numA);
            console.log(numB);
            alert("São iguais!");
        }
    } else{
        alert("Preencha o campo vazio!");
    }
    

    
});
