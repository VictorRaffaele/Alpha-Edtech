const btCadastrar = document.querySelector("#btCadastrar");
const idDay = document.querySelector("#day");
const  idMouth = document.querySelector("#month");
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

    try {
        register();
    } catch (error) {
        if(error instanceof RangeError){
            alert("Digite um nome com pelo menos 5 letras!");
        } else if (error instanceof SyntaxError) {
            alert("Digite uma data valida!");
        } else if(error instanceof EvalError){
            alert("Digite um peso valido!");
        } else if(error instanceof Error){
            alert("Digite uma altura valida!");
        }
    }

}

btCadastrar.addEventListener("click", confRegister);
idDay.addEventListener("input", confirm);
idMouth.addEventListener("input", confirm);
idYear.addEventListener("input", confirm);
idWeight.addEventListener("input", confirm);
idHeight.addEventListener("input", confirm);