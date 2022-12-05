import { NameValidator } from "./validator.js";

class NameInput extends HTMLElement {

    constructor(){
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const label = document.createElement('label');
        const nameInput = document.createElement('input');
        const resultP = document.createElement('p');

        label.innerText = 'Nome:';
        label.setAttribute('for', 'nameInput');
        nameInput.setAttribute('id', 'nameInput');

        shadow.appendChild(label);
        shadow.appendChild(nameInput);           
        shadow.appendChild(resultP);
        nameInput.addEventListener('change', (e :any) =>{
            try {
                resultP.innerText = '';
                new NameValidator(e.target.value);
            } catch (error:any) {
                nameInput.value = '';
                resultP.innerText = error.message;
            }
        });
    }
}

export {NameInput};