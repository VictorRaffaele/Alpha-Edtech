import { v4 as uuidv4 } from 'uuid';
//Activity 1
class Validator {
    constructor(_data) {
        this.data = _data;
    }
}
//Activity 2
class StringValidator extends Validator {
    constructor(_data) {
        if (typeof _data === 'string') {
            super(_data);
        }
        else {
            throw new Error("O tipo está errado");
        }
    }
}
class NumberValidator extends Validator {
    constructor(_data) {
        if (typeof _data === 'number') {
            super(_data);
        }
        else {
            throw new Error("O tipo está errado");
        }
    }
}
class BooleanValidator extends Validator {
    constructor(_data) {
        if (typeof _data === 'boolean') {
            super(_data);
        }
        else {
            throw new Error("O tipo está errado");
        }
    }
}
/*try {
    const num = new NumberValidator(18021999);
    const string = new StringValidator("18/02/1999");
    const bool = new BooleanValidator(false);
    const numE = new NumberValidator(18021999);
    console.log(num);
    console.log(string);
    console.log(bool);
    console.log(numE);
} catch (error) {
    console.log(error);
}*/
//Activity 3
class RegexValidator extends StringValidator {
    constructor(_data, _regex) {
        if (_regex.test(_data)) {
            super(_data);
            this.expresion = _regex;
        }
        else {
            throw new Error("O formato está errado");
        }
    }
    regex() {
        return new RegExp('');
    }
}
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
customElements.define("email-input", EmailInput);
//Activity 4
//Q1
class EmailValidator extends RegexValidator {
    constructor(_data) {
        const reg = new RegExp(/^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/gim);
        super(_data, reg);
    }
    regex() {
        return this.expresion;
    }
}
class PasswordValidator extends RegexValidator {
    constructor(_data) {
        super(_data, /^\w{1,}$/gim);
    }
    regex() {
        return this.expresion;
    }
}
class NameValidator extends RegexValidator {
    constructor(_data) {
        super(_data, /^([a-z]{1,})([ ]{1}[a-z]{1,}){0,}$/gim);
    }
    regex() {
        return this.expresion;
    }
}
class NameInput extends HTMLElement {
    constructor() {
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
        nameInput.addEventListener('change', (e) => {
            try {
                resultP.innerText = '';
                new NameValidator(e.target.value);
            }
            catch (error) {
                nameInput.value = '';
                resultP.innerText = error.message;
            }
        });
    }
}
class PasswordInput extends HTMLElement {
    constructor() {
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
        passInput.addEventListener('change', (e) => {
            try {
                resultP.innerText = '';
                new PasswordValidator(e.target.value);
            }
            catch (error) {
                passInput.value = '';
                resultP.innerText = error.message;
            }
        });
    }
}
customElements.define("name-input", NameInput);
customElements.define("password-input", PasswordInput);
class ApiIndex {
    async register(data) {
        try {
            const options = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) };
            const response = await fetch("/accounts/", options);
            if (!response.ok) {
                const message = await response.json();
                throw new Error(message.error);
            }
            return await response.json();
        }
        catch (error) {
            return error;
        }
    }
    async login(data) {
        try {
            const options = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) };
            const response = await fetch("/accounts/login", options);
            if (!response.ok) {
                const message = await response.json();
                throw new Error(message.error);
            }
            return await response.json();
        }
        catch (error) {
            return error;
        }
    }
    async update(data) {
        try {
            const options = { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) };
            const response = await fetch("/accounts", options);
            if (!response.ok) {
                const message = await response.json();
                throw new Error(message.error);
            }
            return await response.json();
        }
        catch (error) {
            return error;
        }
    }
}
const btReg = document.querySelector("#btReg");
const btLogin = document.querySelector("#btLogin");
const btUpdate = document.querySelector("#btUpdate");
const resultP = document.querySelector("#result");
btReg.addEventListener("click", async () => {
    var _a, _b, _c, _d, _e, _f;
    try {
        const name = (_b = (_a = document.querySelector('name-input')) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('#nameInput');
        const email = (_d = (_c = document.querySelector('email-input')) === null || _c === void 0 ? void 0 : _c.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector('#emailInput');
        const pass = (_f = (_e = document.querySelector('password-input')) === null || _e === void 0 ? void 0 : _e.shadowRoot) === null || _f === void 0 ? void 0 : _f.querySelector('#passInput');
        const data = { name: name.value, email: email.value, password: pass.value };
        const apiIndex = new ApiIndex();
        const result = await apiIndex.register(data);
        resultP.innerText = result;
    }
    catch (error) {
        resultP.innerText = error.message;
    }
});
btLogin.addEventListener("click", async () => {
    var _a, _b, _c, _d;
    try {
        const email = (_b = (_a = document.querySelector('email-input')) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('#emailInput');
        const pass = (_d = (_c = document.querySelector('password-input')) === null || _c === void 0 ? void 0 : _c.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector('#passInput');
        const data = { id: uuidv4() };
        const apiIndex = new ApiIndex();
        const result = await apiIndex.login(data);
        resultP.innerText = result;
    }
    catch (error) {
        resultP.innerText = error.message;
    }
});
btUpdate.addEventListener("click", async () => {
    var _a, _b, _c, _d, _e, _f;
    try {
        const name = (_b = (_a = document.querySelector('name-input')) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('#nameInput');
        const email = (_d = (_c = document.querySelector('email-input')) === null || _c === void 0 ? void 0 : _c.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector('#emailInput');
        const pass = (_f = (_e = document.querySelector('password-input')) === null || _e === void 0 ? void 0 : _e.shadowRoot) === null || _f === void 0 ? void 0 : _f.querySelector('#passInput');
        const data = { id: uuidv4(), name: name.value, email: email.value, password: pass.value };
        const apiIndex = new ApiIndex();
        const result = await apiIndex.update(data);
        resultP.innerText = result;
    }
    catch (error) {
        resultP.innerText = error.message;
    }
});