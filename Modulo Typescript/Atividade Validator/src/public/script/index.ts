import { v4 as uuidv4 } from 'uuid';

//Activity 1
class Validator {
    protected data: any;

    constructor(_data: any) {
        this.data = _data;
    }
}

//Activity 2
class StringValidator extends Validator{

    constructor(_data: string){
        if (typeof _data === 'string') {
            super(_data);
        } else{
            throw new Error("O tipo está errado");
        }
    }
}

class NumberValidator extends Validator{

    constructor(_data: number){
        if (typeof _data === 'number') {
            super(_data);
        } else{
            throw new Error("O tipo está errado");
        }
    }
}

class BooleanValidator extends Validator{

    constructor(_data: boolean){
        if (typeof _data === 'boolean') {
            super(_data);
        } else{
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
abstract class RegexValidator extends StringValidator{  
    protected expresion: RegExp;
  
    constructor(_data: string, _regex: RegExp){
        if (_regex.test(_data)) {
            super(_data);
            this.expresion = _regex;
        }else{
            throw new Error("O formato está errado");
        }
    }

    regex(): RegExp{
        return new RegExp('');
    }
}

class EmailInput extends HTMLElement {

    constructor(){
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
        emailInput.addEventListener('change', (e :any) =>{
            try {
                resultP.innerText = '';
                new EmailValidator(e.target.value);
            } catch (error:any) {
                emailInput.value = '';
                resultP.innerText = error.message;
            }
        });
    }
}

customElements.define("email-input", EmailInput);

//Activity 4
//Q1
class EmailValidator extends RegexValidator{
    constructor(_data: string){
        const reg = new RegExp(/^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/gim);
        super(_data, reg);
    }

    override regex(): RegExp {
        return this.expresion;
    }
}

class PasswordValidator extends RegexValidator{
    constructor(_data: string){
        super(_data, /^\w{1,}$/gim);    
    }

    override regex(): RegExp {
        return this.expresion;
    }
}

class NameValidator extends RegexValidator{
    constructor(_data: string){
        super(_data, /^([a-z]{1,})([ ]{1}[a-z]{1,}){0,}$/gim);
    }

    override regex(): RegExp {
        return this.expresion;
    }
}

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

customElements.define("name-input", NameInput);
customElements.define("password-input", PasswordInput);

//Q2
interface Response<T>{
    data: T;
    message: Array<string>;
}

interface UserData{
    id: string;
    name: string;
    email: string;
    password: string;
}

interface LoginData{
    id: string;
}

interface BodyData{
    name: string;
    email: string;
    password: string;
}

class ApiIndex{
    async register(data: BodyData): Promise<Response<BodyData>>{
        try {
            const options = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) };
            const response = await fetch("/accounts/", options);
    
            if (!response.ok) {
                const message = await response.json();
                throw new Error(message.error);
            }
            return await response.json();
        } catch (error: any) {
            return error;
        }

    }

    async login(data: LoginData): Promise<Response<LoginData>>{
        try {
            const options = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) };
            const response = await fetch("/accounts/login", options);
    
            if (!response.ok) {
                const message = await response.json();
                throw new Error(message.error);
            }
            return await response.json();
        } catch (error: any) {
            return error;
        }
      
    }

    async update(data: UserData): Promise<Response<UserData>> {
        try {
            const options = { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) };
            const response = await fetch("/accounts", options);
    
            if (!response.ok) {
                const message = await response.json();
                throw new Error(message.error);
            }
            return await response.json();
        } catch (error: any) {
            return error;
        }

    }
}

const btReg: any = document.querySelector("#btReg");
const btLogin: any = document.querySelector("#btLogin");
const btUpdate: any = document.querySelector("#btUpdate");
const resultP: any = document.querySelector("#result");

btReg.addEventListener("click", async () => {
    try {
        const name: any = document.querySelector('name-input')?.shadowRoot?.querySelector('#nameInput');
        const email: any = document.querySelector('email-input')?.shadowRoot?.querySelector('#emailInput');
        const pass: any = document.querySelector('password-input')?.shadowRoot?.querySelector('#passInput');
        const data: BodyData = {name: name.value, email: email.value, password: pass.value};
        const apiIndex = new ApiIndex();
        const result = await apiIndex.register(data);
        resultP.innerText = result;
    } catch (error: any) {
        resultP.innerText = error.message;
    }
});

btLogin.addEventListener("click", async () => {
    try {
        const email: any = document.querySelector('email-input')?.shadowRoot?.querySelector('#emailInput');
        const pass: any = document.querySelector('password-input')?.shadowRoot?.querySelector('#passInput');
        const data: LoginData = {id: uuidv4()}
        const apiIndex = new ApiIndex();
        const result = await apiIndex.login(data);
        resultP.innerText = result;
    } catch (error: any) {
        resultP.innerText = error.message;
    }
});

btUpdate.addEventListener("click", async () => {
    try{
        const name: any = document.querySelector('name-input')?.shadowRoot?.querySelector('#nameInput');
        const email: any = document.querySelector('email-input')?.shadowRoot?.querySelector('#emailInput');
        const pass: any = document.querySelector('password-input')?.shadowRoot?.querySelector('#passInput');
        const data: UserData = {id: uuidv4(), name: name.value, email: email.value, password: pass.value};
        const apiIndex = new ApiIndex();
        const result = await apiIndex.update(data);
        resultP.innerText = result;
    } catch(error: any){
        resultP.innerText = error.message;
    }
});