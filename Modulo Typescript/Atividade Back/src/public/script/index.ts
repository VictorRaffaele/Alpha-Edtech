import { BodyData, LoginData, UserData } from "../model/index.js";
import { ApiIndex } from "../api/api.js";
import { NameInput } from "./nameInput.js";
import { EmailInput } from './emailInput.js';
import { PasswordInput } from "./passInput.js"
 
const btReg: any = document.querySelector("#btReg");
const btLogin: any = document.querySelector("#btLogin");
const btUpdate: any = document.querySelector("#btUpdate");
const resultP: any = document.querySelector("#result");

customElements.define("email-input", EmailInput);
customElements.define("name-input", NameInput);
customElements.define("password-input", PasswordInput);

btReg.addEventListener("click", async () => {
    try {
        const name: any = document.querySelector('name-input')?.shadowRoot?.querySelector('#nameInput');
        const email: any = document.querySelector('email-input')?.shadowRoot?.querySelector('#emailInput');
        const pass: any = document.querySelector('password-input')?.shadowRoot?.querySelector('#passInput');
        const data: BodyData = {name: name.value, email: email.value, password: pass.value};
        const apiIndex = new ApiIndex();
        const result = await apiIndex.register(data);
        resultP.innerText = `Usuario Casdatrado! \nid: ${result.id} \nnome: ${result.name} \nemail: ${result.email}`;
    } catch (error: any) {
        resultP.innerText = error.message;
    }
});

btLogin.addEventListener("click", async () => {
    try {
        const email: any = document.querySelector('email-input')?.shadowRoot?.querySelector('#emailInput');
        const pass: any = document.querySelector('password-input')?.shadowRoot?.querySelector('#passInput');
        const data: LoginData = {'email': email.value, 'password': pass.value}
        const apiIndex = new ApiIndex();
        const result = await apiIndex.login(data);
        resultP.innerText = `Usuario logado! \nid: ${result[0].id}`;
    } catch (error: any) {
        resultP.innerText = error.message;
    }
});

btUpdate.addEventListener("click", async () => {
    try{
        const name: any = document.querySelector('name-input')?.shadowRoot?.querySelector('#nameInput');
        const email: any = document.querySelector('email-input')?.shadowRoot?.querySelector('#emailInput');
        const pass: any = document.querySelector('password-input')?.shadowRoot?.querySelector('#passInput');
        const data: BodyData = {name: name.value, email: email.value, password: pass.value};
        const apiIndex = new ApiIndex();
        const result = await apiIndex.update(data);
        resultP.innerText = `Usuario Editado! \nid: ${result.id} \nnome: ${result.name} \nemail: ${result.email}`;
    } catch(error: any){
        resultP.innerText = error.message;
    }
});