import {default as AscII} from './AscII.js';

const resultBt = document.querySelector("#resultBt");

resultBt.addEventListener("click", () => {

    const fullname = document.querySelector("#fullname").value;
    const ascII = new AscII(fullname);
    const code = ascII.getCode();

    function request(){

        return new Promise((resolve, reject) => {
    
            fetch(`http://ubuntu.alphaedtech.org.br:8080/?string=${fullname}&code=${code}`, {method : 'GET'})
            .then(resp => {
              
                if (resp.status == 200) {
                    return resp.json();
                }else{
                    return Promise.reject("[ERROR] Reject draw error!");
                }
            })
            .then((value) => {resolve(value)})
            .catch(err => reject(err));
    
        })
    
    }

    async function showResult(){

        const result = document.querySelector("#result");

        try {
            
            const resultJson = await request();
            console.log(resultJson)
            result.innerHTML = resultJson.question;


        } catch (error) {
            
            console.log(error);

        }

    }

    showResult();
})