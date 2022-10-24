import {Login} from "./login.js";

const user = document.querySelector("#name");
const password = document.querySelector("#password");
const loginBt = document.querySelector("#loginBt");
const login = new Login;

async function tryLogin(){
    let userType = '';
    try {
        const data = {user: user.value, password: password.value}
        const result = await login.loginReq(data);
        if(result[0]){
            await login.generateToken(result[0].name);
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