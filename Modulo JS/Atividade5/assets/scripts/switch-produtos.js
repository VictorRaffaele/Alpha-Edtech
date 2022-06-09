const btShowProduct = document.querySelector("#btExibirProd");

function addImage(sorce) {

    const image = document.createElement("img");
    const selected = document.querySelector("#selected");

    image.src = sorce;
    image.style.width = "100px";
    image.style.height = "100px";
    selected.appendChild(image);

}

function showProduct() {
    
    const idProducts = document.querySelector("#products").value;

    switch (idProducts) {
        case "dualshock4":
            addImage("./assets/imagens/ds4.jpg");
            break;
        case "dualshock5":
            addImage("./assets/imagens/ds5.jpg");
            break;
        case "xbox-cont":
            addImage("./assets/imagens/xbox.jpg");
            break;
        case "ps5":
            addImage("./assets/imagens/PS5.jpg");
            break;
        case "seriesX": 
            addImage("./assets/imagens/xbox-x.jpg"); 
            break;      
    }
}

btShowProduct.addEventListener("click", showProduct);