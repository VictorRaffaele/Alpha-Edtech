import { EmailValidator } from "./validator.js";
class EmailInput extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const label = document.createElement('label');
        const emailInput = document.createElement('input');
        const resultP = document.createElement('p');
        label.innerText = 'Email:';
        label.setAttribute('for', 'emailInput');
        emailInput.setAttribute('id', 'emailInput');
        shadow.appendChild(label);
        shadow.appendChild(emailInput);
        shadow.appendChild(resultP);
        emailInput.addEventListener('change', (e) => {
            try {
                resultP.innerText = '';
                new EmailValidator(e.target.value);
            }
            catch (error) {
                emailInput.value = '';
                resultP.innerText = error.message;
            }
        });
    }
}
export { EmailInput };
