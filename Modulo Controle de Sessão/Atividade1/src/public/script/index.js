import {Login} from "./login.js";

const user = document.querySelector("#name");
const password = document.querySelector("#password");
const loginBt = document.querySelector("#loginBt");
const token = document.querySelector("#token");
const login = new Login;
const html = document.querySelector("html");
const link = document.querySelector("#link");

async function tryLogin(){
    let userType = '';
    try {
        const result = await login.loginReq(user.value, password.value);
        if(result[0]){
            const generated = await login.generateToken(user.value);
            token.value = generated[0].loged;
            userType = await login.userLoged(token.value);
        }
        if(userType[0].adm_perm == false){
            window.location.assign("./clientPage.html");
        } else{
            window.location.assign("./admPage.html");
        }
    } catch (error) {
        console.log(error)
    }
}
loginBt.addEventListener('click', tryLogin);