class Validator {
    protected data: any;

    constructor(_data: any) {
        this.data = _data;
    }
}

class StringValidator extends Validator{

    constructor(_data){
        if (typeof _data === 'string') {
            super(_data);
        } else{
            throw new Error("O tipo está errado");
        }
    }
}

class NumberValidator extends Validator{

    constructor(_data){
        if (typeof _data === 'number') {
            super(_data);
        } else{
            throw new Error("O tipo está errado");
        }
    }
}

class BooleanValidator extends Validator{

    constructor(_data){
        if (typeof _data === 'boolean') {
            super(_data);
        } else{
            throw new Error("O tipo está errado");
        }
    }
}

try {
    const num = new NumberValidator(18021999);
    const string = new StringValidator("18/02/1999");
    const bool = new BooleanValidator(false);
    const numE = new NumberValidator('18021999');
    console.log(num);
    console.log(string);
    console.log(bool);
    console.log(numE);
} catch (error) {
    console.log(error);
}


