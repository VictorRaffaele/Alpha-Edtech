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
    
    if(birth > data){

        alert("Digite uma data valida!");

    } else{

        user.name = name;
        user.birthDate = birth;
        user.weight = weight;
        user.height = height;
        user.gender = gender;

    } 
  
    console.log(user);

}

function confirm(e) {

    if (e.data != "1" && e.data != "2" && e.data != "3" && e.data != "4" && e.data != "5" && e.data != "6" && e.data != "7" && e.data != "8" && e.data != "9" && e.data != "0" && e.data != null) {
        this.value = this.value.slice(0,-1);
    } 
}

btCadastrar.addEventListener("click", register);
idDay.addEventListener("input", confirm);
idMouth.addEventListener("input", confirm);
idYear.addEventListener("input", confirm);
idWeight.addEventListener("input", confirm);
idHeight.addEventListener("input", confirm);