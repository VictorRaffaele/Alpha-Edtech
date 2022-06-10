const model = document.querySelector("#model");

function addImage(sorce) {

    const image = document.createElement("img");
    const selected = document.querySelector("#selected");

    image.src = sorce;
    image.style.width = "100px";
    image.style.height = "100px";
    selected.appendChild(image);

}

function showData() {
    
    const name = document.querySelector("#name");
    const maker = document.querySelector("#maker");
    const speed = document.querySelector("#speed");
    const torque = document.querySelector("#torque");
    const imgCar = document.querySelector("#car");

    switch (model.value) {
        case "start":
            name.textContent = "";
            maker.textContent = "";
            speed.textContent = "";
            torque.textContent = "";
            imgCar.innerHTML = "";
            break; 
        case "corolla":
            name.textContent = "Corolla";
            maker.textContent = "Toyota Motor";
            speed.textContent = "199 Km/h";
            torque.textContent = "9,6 segundos";
            imgCar.innerHTML = '<img src="./assets/imagens/corolla.webp">';
            break;
    
        case "renegade":
            name.textContent = "Renegade";
            maker.textContent = "Jeep";
            speed.textContent = "182 - 210 Km/h";
            torque.textContent = "8,7 - 11,1 segundos";
            imgCar.innerHTML = '<img src="./assets/imagens/renegade.webp">';
            break;

        case "gol":
            name.textContent = "Gol";
            maker.textContent = "Volkswagen";
            speed.textContent = "164 - 185 Km/h";
            torque.textContent = "10,1 - 13,4 segundos";
            imgCar.innerHTML = '<img src="./assets/imagens/gol.webp">';
            break;

        case "s10":
            name.textContent = "S10";
            maker.textContent = "Chevrolet";
            speed.textContent = "180 Km/h";
            torque.textContent = "10,3 segundos";
            imgCar.innerHTML = '<img src="./assets/imagens/s10.webp">';
            break;

        case "ranger":
            name.textContent = "Ranger";
            maker.textContent = "Ford";
            speed.textContent = "180 Km/h";
            torque.textContent = "13,3 segundos";
            imgCar.innerHTML = '<img src="./assets/imagens/ranger.webp">';
            break;
    }

}

model.addEventListener("change", showData);
