//Valid the entries caracteres in cep
export function confirm(e) {
    if (e.data != "1" && e.data != "2" && e.data != "3" && e.data != "4" && e.data != "5" && e.data != "6" && e.data != "7" && e.data != "8" && e.data != "9" && e.data != "0" && e.data != null) {
        cep.value = cep.value.slice(0,-1);
    } 
}

//Valid the cep length
export function fixLength() {

    cep.value = cep.value.substring(0,8);

}

//onmfirm if the cep is completed
export function valid() {
    
    if (cep.value.length < 8) {

        return false;

    } else{

        return true;

    }

}