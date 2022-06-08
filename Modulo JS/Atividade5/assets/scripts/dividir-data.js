const btExibirData = document.querySelector("#btExibirData");

function dayExtensive(day){

    switch (day){
        case 1:
            return "Segunda"; 
        case 2:
            return "Terça";  
        case 3:
            return "Quarta"; 
        case 4:
            return "Quinta";  
        case 5:
            return "Sexta";
        case 6:
            return "Sabado";
        case 7:
            return "Domingo";           
    }

}

function mouthExtensive(mouth) {
    
    switch (mouth) {
        case 0:
            return "Janeiro";  
        case 1:
            return "Fevereiro"; 
        case 2:
            return "Março";  
        case 3:
            return "Abril"; 
        case 4:
            return "Maio";  
        case 5:
            return "Junho";
        case 6:
            return "Julho";  
        case 7:
            return "Agosto"; 
        case 8:
            return "Setembro";  
        case 9:
            return "Outubro"; 
        case 10:
            return "Novembro";  
        case 11:
            return "Dezembro";       
    }

}

function divDate() {
    
    const entryDate = new Date(document.querySelector("#entryDate").value);

    if (isNaN(entryDate.getUTCDate())) {

        alert("Digite uma Data Valida!");
        
    } else{

        const textDay = document.querySelector("#day");
        const textMouth = document.querySelector("#mouth");
        const textYear = document.querySelector("#year");
        const textWeek = document.querySelector("#weekDay");
        const mouthExt = document.querySelector("#mouthExt");
        const textTime = document.querySelector("#timeStamp");
    
        textDay.innerHTML = entryDate.getUTCDate();
        textMouth.innerHTML = entryDate.getUTCMonth() +1;
        textYear.innerHTML = entryDate.getFullYear();
        textWeek.innerHTML = dayExtensive(entryDate.getDay() + 1);
        mouthExt.innerHTML = mouthExtensive(entryDate.getUTCMonth());
        textTime.innerHTML = entryDate.getTime();
    
    }
}

btExibirData.addEventListener("click", divDate);