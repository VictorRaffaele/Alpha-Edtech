const main = document.querySelector("main");
const spam = document.querySelector("spam");

function client_info(){
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:8082/info_client`, {
            method: 'GET'
        })
        .then(resp => {
            if (resp.status == 200) {
                return resp.json();
            } else{
                return Promise.reject("[ERROR] Reject user error!");
            }
        })
        .then((value) => {resolve(value)})
        .catch(err => reject(err));
    });
}

function loged_confirm(){
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:8082/logen_confirm`, {
            method: 'GET'
        })
        .then(resp => {
            if (resp.status == 200) {
                return resp.json();
            } else{
                return Promise.reject("[ERROR] Reject user error!");
            }
        })
        .then((value) => {resolve(value)})
        .catch(err => reject(err));
    });
}

async function getInfos(){

    try {
        const result = await loged_confirm();
        if (result.message == 'User Confirmed!') {
            const infos = await client_info();

            spam.textContent = infos.name;
            main.innerHTML += "<h2>Seus Dados:<h2/>" + '<br/>' + `<p>Senha: ${infos.password}</p>` + '<br/>' + `<p>CPF: ${infos.cpf}</p>`+ '<br/>' + `<p>E-mail: ${infos.email}</p>`;
        
        }else{
            window.location.assign("./index.html");
        }
    } catch (error) {
        console.log(error);
    }

   
}

getInfos()