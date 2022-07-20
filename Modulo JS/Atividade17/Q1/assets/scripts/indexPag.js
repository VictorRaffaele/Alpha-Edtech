const main = document.querySelector("main");

export function loadIndex() {
    main.innerHTML = `<article>
                            <label for="state">UF:</label>
                            <select name="state" id="state">
                            <option value="none">Estado</option>
                            <optgroup label="Norte">
                            <option value="AC">Acre</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="PA">Pará</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="TO">Tocantins</option>
                        </optgroup>
                        <optgroup label="Nordeste">
                            <option value="AL">Alagoas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="MA">Maranhão</option>
                            <option value="PB">Paraiba</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="SE">Sergipe</option>
                        </optgroup>
                        <optgroup label="Centro-Oeste">
                            <option value="DF">Distrito Federal</option>
                            <option value="GO">Goiás</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                        </optgroup>
                        <optgroup label="Sudeste">
                        <option value="ES">Espírito Santo</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="SP">São Paulo</option>
                        </optgroup>
                        <optgroup label="Sul">
                            <option value="PR">Paraná</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="SC">Santa Caratina</option>
                        </optgroup>
                            </select>
                        </article>
                        <article id="artCity">
                            <label for="city">Municipios: </label>
                            <select name="city" id="city">
                            </select>
                        </article>
                        <article id='temp'>
                        </article>`;
}

export function showSelect() {
    const artCity = document.querySelector("#artCity");

    artCity.style.visibility = 'visible';
}

export function optionCity(muni) {
    const city = document.querySelector("#city");

    city.innerHTML += `<option value="${muni}">${muni}</option>`;

}

export function clearOption() {

    const city = document.querySelector("#city");
    city.innerHTML = '<option value="none">Municipio</option>';

}

export function createTemp(id) {
    
    const temp = document.querySelector("#temp");
    temp.innerHTML += `<p id="date${id}">Data: </p>
                        <p id="day${id}">Dia da Semana: </p>
                        <p id="prev${id}">Resumo da Previsão: </p>
                        <p id="tempMin${id}">Temperatura Mínima: </p>
                        <p id="tempMax${id}">Temperatura Maxíma: </p>`;
}

export function clearTemp() {

    const temp = document.querySelector("#temp");
    temp.innerHTML = '';

}