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
export { EmailValidator, PasswordValidator, NameValidator };
