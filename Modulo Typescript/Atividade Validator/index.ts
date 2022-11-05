class Validator {
    protected data: any;

    constructor(_data: any) {
        this.data = _data;
    }
}

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

class RegexValidator extends StringValidator{
    constructor(_data:string){
        const regex = /^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/;
        if (regex.test(_data)) {
            super(_data);
        } else{
            throw new Error("O formato está errado");
        }
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
                new RegexValidator(e.target.value);
            } catch (error:any) {
                resultP.innerText = error.message;
            }
        });
    }
}

customElements.define("email-input", EmailInput);

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


