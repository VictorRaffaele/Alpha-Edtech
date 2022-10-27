class Validator {
    data: number | string;

    constructor(_data: number | string) {
        this.validate(_data);
    }

    validate(data: number | string){
        if (typeof data === 'string') {
            this.data = data;
        } else{
            data = data.toString();
            this.data = `${data.slice(0,2)}/${data.slice(2,4)}/${data.slice(4)}`;
        }
    }
}

const date:Validator = new Validator(18021999);
const date2:Validator = new Validator("18/02/1999");
console.log(date.data);
console.log(date2.data);