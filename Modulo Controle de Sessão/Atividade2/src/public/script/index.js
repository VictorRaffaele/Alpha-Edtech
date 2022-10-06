import {Login} from "./login.js";

const user = document.querySelector("#name");
const password = document.querySelector("#password");
const loginBt = document.querySelector("#loginBt");
const login = new Login;

async function tryLogin(){
    let userType = '';
    try {
        const result = await login.loginReq(user.value, password.value);
        if(result[0]){
            await login.generateToken(user.value);
            userType = await login.userLoged();
        }
        if(userType == false){
            window.location.assign("./clientPage.html");
        } else{
            window.location.assign("./admPage.html");
        }
    } catch (error) {
        console.log(error)
    }
}
loginBt.addEventListener('click', tryLogin);