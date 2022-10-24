export class Login {

    loginReq(data){
        return new Promise((resolve, reject) => {
            fetch(`http://localhost:8082/login`, {
                method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify(data)
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

    generateToken(user){
        return new Promise((resolve, reject) => {
            fetch(`http://localhost:8082/login/${user}`, {
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

    userLoged(){
        return new Promise((resolve, reject) => {
            fetch(`http://localhost:8082/loged`, {
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

}