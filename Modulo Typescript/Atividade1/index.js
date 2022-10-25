var Validator = /** @class */ (function () {
    function Validator(_data) {
        this.validate(_data);
    }
    Validator.prototype.validate = function (data) {
        if (typeof data === 'string') {
            this.data = data;
        }
        else {
            data = data.toString();
            this.data = "".concat(data.slice(0, 2), "/").concat(data.slice(2, 4), "/").concat(data.slice(4));
        }
    };
    return Validator;
}());
var date = new Validator(18021999);
var date2 = new Validator("18/02/1999");
console.log(date.data);
console.log(date2.data);
