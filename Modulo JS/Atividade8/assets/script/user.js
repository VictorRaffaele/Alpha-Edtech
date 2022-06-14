const btCadastrar = document.querySelector("#btCadastrar");

let user = {

    'name' : "",
    'birthDate' : Date,
    'weight' : 0.0,
    'height': 0,
    'gender': ""

};

function register() {
    
    const name = document.querySelector("#name").value;
    const day = document.querySelector("#day").value;
    const month = document.querySelector("#month").value;
    const year = document.querySelector("#year").value;
    const weight = parseFloat(document.querySelector("#weight").value);
    const height = parseInt(document.querySelector("#height").value);
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

btCadastrar.addEventListener("click", register);