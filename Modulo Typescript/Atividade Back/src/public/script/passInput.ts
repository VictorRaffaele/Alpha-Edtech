import { PasswordValidator } from "./validator.js";

class PasswordInput extends HTMLElement {

    constructor(){
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const label = document.createElement('label');
        const passInput = document.createElement('input');
        const resultP = document.createElement('p');

        label.innerText = 'Senha:';
        label.setAttribute('for', 'passInput');
        passInput.setAttribute('id', 'passInput');
        passInput.setAttribute('type', 'password');

        shadow.appendChild(label);
        shadow.appendChild(passInput);           
        shadow.appendChild(resultP);
        passInput.addEventListener('change', (e :any) =>{
            try {
                resultP.innerText = '';
                new PasswordValidator(e.target.value);
            } catch (error:any) {
                passInput.value = '';
                resultP.innerText = error.message;
            }
        });
    }
}
export {PasswordInput};