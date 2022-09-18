export default class AscII{

    constructor(_string){

        this.string = _string;
        this.code = 0;

    }

    getArray(string){
    
        let charCode = [];

        for (let index = 0; index < string.length; index++) {

            let code = string.charCodeAt(index);
            charCode.push(code);

        }
    
        return charCode;
    }

    getCode(){

        for (let index = 0; index < this.getArray(this.string).length; index++) {
           
            this.code += this.getArray(this.string)[index];

        }

        return this.code;

    }
}