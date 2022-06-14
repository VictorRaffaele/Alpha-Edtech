const btCadastrar = document.querySelector("#btCadastrar");
const idDay = document.querySelector("#day");
const idMouth = document.querySelector("#month");
const idYear = document.querySelector("#year");
const idWeight = document.querySelector("#weight");
const idHeight = document.querySelector("#height");

let user = {

    'name' : "",
    'birthDate' : Date,
    'weight' : 0.0,
    'height': 0,
    'gender': ""

};

function register() {
    
    const name = document.querySelector("#name").value;
    const day = idDay.value;
    const month = idMouth.value;
    const year = idYear.value;
    const weight = parseFloat(idWeight.value);
    const height = parseInt(idHeight.value);
    const gender = document.querySelector("#gender").value;

    const data = new Date;
    const birth = new Date(year, month-1, day);

    if (name.length == '') {
        throw new RangeError('Field "name" is invalid!');
    } else if (name.length < 5) {
        throw new RangeError('Field "name" is invalid!');
    } else{
        user.name = name;
    }

    if (birth > data) {
        throw new SyntaxError('Field "birthDate" is invalid!');
    } else if(day == "" || month == "" || year == ""){
        throw new SyntaxError('Field "birthDate" is invalid!');
    } else{
        user.birthDate = birth;
    }

    if (isNaN(weight)) {
        throw new EvalError('Field "weight" is invalid!');
    } else{
        user.weight = weight;
    }

    if(isNaN(height)){
        throw new Error('Field "height" is invalid!');
    } else{
        user.height = height;
    }
    
    user.gender = gender;

    console.log(user);
}

function confirm(e) {

    if (e.data != "1" && e.data != "2" && e.data != "3" && e.data != "4" && e.data != "5" && e.data != "6" && e.data != "7" && e.data != "8" && e.data != "9" && e.data != "0" && e.data != null) {
        this.value = this.value.slice(0,-1);
    } 
}

function confRegister(){

    const idShow = document.querySelector("#showData");

    try {
        register();
        idShow.innerHTML = '<label for="nameUsr">Nome: </label>'
        idShow.innerHTML += '<p id="nameUsr">' + user.name + '</p>'
        idShow.innerHTML += '<label for="birthUsr">Data de Nascimento: </label>'
        idShow.innerHTML += '<p id="birthUsr">' + user.birthDate + '</p>'
        idShow.innerHTML += '<label for="weightUsr">Peso: </label>'
        idShow.innerHTML += '<p id="weightUsr">' + user.weight + 'Kg </p>'
        idShow.innerHTML += '<label for="heightUsr">Altura: </label>'
        idShow.innerHTML += '<p id="heightUsr">' + user.height + 'cm </p>'
        idShow.innerHTML += '<label for="genderUsr">Gênero: </label>'
        idShow.innerHTML += '<p id="genderUsr">' + user.gender + '</p>'
        idShow.innerHTML += '<label>Objeto: </label>'
        idShow.innerHTML += JSON.stringify(user);
        
    } catch (error) {
        if(error instanceof RangeError){
            idShow.innerHTML = '<label> Field "name" is invalid! </label>'
        } else if (error instanceof SyntaxError) {
            idShow.innerHTML = '<label> Field "birthDate" is invalid! </label>'
        } else if(error instanceof EvalError){
            idShow.innerHTML = '<label> Field "weight" is invalid! </label>'
        } else if(error instanceof Error){
            idShow.innerHTML = '<label> Field "height" is invalid! </label>'
        } 
    } 

}

btCadastrar.addEventListener("click", confRegister);
idDay.addEventListener("input", confirm);
idMouth.addEventListener("input", confirm);
idYear.addEventListener("input", confirm);
idWeight.addEventListener("input", confirm);
idHeight.addEventListener("input", confirm);