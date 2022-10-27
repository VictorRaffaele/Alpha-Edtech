var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Validator = /** @class */ (function () {
    function Validator(_data) {
        this.data = _data;
    }
    return Validator;
}());
var StringValidator = /** @class */ (function (_super) {
    __extends(StringValidator, _super);
    function StringValidator(_data) {
        var _this = this;
        if (typeof _data === 'string') {
            _this = _super.call(this, _data) || this;
        }
        else {
            throw new Error("O tipo está errado");
        }
        return _this;
    }
    return StringValidator;
}(Validator));
var NumberValidator = /** @class */ (function (_super) {
    __extends(NumberValidator, _super);
    function NumberValidator(_data) {
        var _this = this;
        if (typeof _data === 'number') {
            _this = _super.call(this, _data) || this;
        }
        else {
            throw new Error("O tipo está errado");
        }
        return _this;
    }
    return NumberValidator;
}(Validator));
var BooleanValidator = /** @class */ (function (_super) {
    __extends(BooleanValidator, _super);
    function BooleanValidator(_data) {
        var _this = this;
        if (typeof _data === 'boolean') {
            _this = _super.call(this, _data) || this;
        }
        else {
            throw new Error("O tipo está errado");
        }
        return _this;
    }
    return BooleanValidator;
}(Validator));
try {
    var num = new NumberValidator(18021999);
    var string = new StringValidator("18/02/1999");
    var bool = new BooleanValidator(false);
    var numE = new NumberValidator('18021999');
    console.log(num);
    console.log(string);
    console.log(bool);
    console.log(numE);
}
catch (error) {
    console.log(error);
}
