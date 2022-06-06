const formDate = document.querySelector("#verif_date");

formDate.addEventListener("submit", function(vefity){

    vefity.preventDefault();

    /*IDs Variables*/
    const idEntry = document.querySelector("#entry-date");
    const idMale = document.querySelector("#male");
    const idFemale = document.querySelector("#female");

    /*Date Obtencion Variables*/
    const entry = new Date(idEntry.value);
    const today = new Date();

    /*Date Casting*/ 
    const dateEntry = Date.UTC(entry.getFullYear(), entry.getMonth() + 1, entry.getDate());
    const dateToday = Date.UTC(today.getFullYear(), today.getMonth() + 1, today.getDate());
    
    /*Checked Variables*/
    const entryMale = idMale.checked;
    const entryFemale = idFemale.checked;

    if(entryMale == true){

        const ageDays = (dateToday - dateEntry) / (1000 * 3600 * 24);
        const expec = (80.1 * 365.25) - ageDays;

        alert("Você ainda tem (aproximadamente): " + expec.toFixed(2) + "dias de vida!");

    } else if(entryFemale == true){

        const ageDays = (dateToday - dateEntry) / (1000 * 3600 * 24);
        const expec = (73.1 * 365.25) - ageDays;
        
        alert("Você ainda tem (aproximadamente): " + expec.toFixed(2) + "dias de vida!");

    } else {
        alert("Preencha o campo genero!");
    }

});