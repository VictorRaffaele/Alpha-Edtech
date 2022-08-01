export default class Cep{

    constructor(){

        this.cep;
    }

    setCep(_cep){

        this.cep = _cep;

    }

    getNum(){

        return this.cep;

    }

    getFormated(){

        let formated = this.cep.substring(0,5)
        formated += '-'
        formated += this.cep.substring(5,8)

        return formated;
    }

}