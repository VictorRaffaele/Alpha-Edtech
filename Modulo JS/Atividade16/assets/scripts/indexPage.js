const main = document.querySelector("main");
const body = document.querySelector("body");

//Create content of main page and disable btSearch.
export function mainPage() {
    
    main.innerHTML = `<article> 
                        <article><label for="cep">CEP:</label><input type="text" name="cep" id="cep" placeholder="Apenas números"/></article> 
                        <button type="button" class="btConfirmar" id="btSearch">Consultar</button> 
                    </article>`
                    + '<article id="result"></article>';
   
    btSearch.disabled = true;

}

//Create HTML code in result article
export function createResult() {
    const resultID = document.querySelector("#result");

    resultID.innerHTML = '<p>Endereço: <span id="address"></span> </p>'
                        + '<p>Bairro: <span id="district"></span></p>'
                        + '<p>Cidade: <span id="city"></span></p>'
                        + '<p>Estado: <span id="state"></span></p>'
                        + '<p>Latitude: <span id="lat"></span></p>'
                        + '<p>Longetude: <span id="lng"></span></p>'
                        + '<button type="button" class="btConfirmar" id="btShowMap">Exibir Mapa</button>';

    cep.value = ''

    btShowMap.addEventListener("click", showMap);

}

//Add content to map article.
function showMap() {
    const map = document.querySelector("#map")

    map.innerHTML = `<iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com.br/maps?q=${lat.innerHTML}${lng.innerHTML}&output=embed&dg=oo"></iframe>`

}