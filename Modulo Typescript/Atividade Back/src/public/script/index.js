var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ApiIndex } from "../api/api.js";
import { NameInput } from "./nameInput.js";
import { EmailInput } from './emailInput.js';
import { PasswordInput } from "./passInput.js";
const btReg = document.querySelector("#btReg");
const btLogin = document.querySelector("#btLogin");
const btUpdate = document.querySelector("#btUpdate");
const resultP = document.querySelector("#result");
customElements.define("email-input", EmailInput);
customElements.define("name-input", NameInput);
customElements.define("password-input", PasswordInput);
btReg.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    try {
        const name = (_b = (_a = document.querySelector('name-input')) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('#nameInput');
        const email = (_d = (_c = document.querySelector('email-input')) === null || _c === void 0 ? void 0 : _c.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector('#emailInput');
        const pass = (_f = (_e = document.querySelector('password-input')) === null || _e === void 0 ? void 0 : _e.shadowRoot) === null || _f === void 0 ? void 0 : _f.querySelector('#passInput');
        const data = { name: name.value, email: email.value, password: pass.value };
        const apiIndex = new ApiIndex();
        const result = yield apiIndex.register(data);
        resultP.innerText = `Usuario Casdatrado! \nid: ${result.id} \nnome: ${result.name} \nemail: ${result.email}`;
    }
    catch (error) {
        resultP.innerText = error.message;
    }
}));
btLogin.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    var _g, _h, _j, _k;
    try {
        const email = (_h = (_g = document.querySelector('email-input')) === null || _g === void 0 ? void 0 : _g.shadowRoot) === null || _h === void 0 ? void 0 : _h.querySelector('#emailInput');
        const pass = (_k = (_j = document.querySelector('password-input')) === null || _j === void 0 ? void 0 : _j.shadowRoot) === null || _k === void 0 ? void 0 : _k.querySelector('#passInput');
        const data = { 'email': email.value, 'password': pass.value };
        const apiIndex = new ApiIndex();
        const result = yield apiIndex.login(data);
        resultP.innerText = `Usuario logado! \nid: ${result[0].id}`;
    }
    catch (error) {
        resultP.innerText = error.message;
    }
}));
btUpdate.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    var _l, _m, _o, _p, _q, _r;
    try {
        const name = (_m = (_l = document.querySelector('name-input')) === null || _l === void 0 ? void 0 : _l.shadowRoot) === null || _m === void 0 ? void 0 : _m.querySelector('#nameInput');
        const email = (_p = (_o = document.querySelector('email-input')) === null || _o === void 0 ? void 0 : _o.shadowRoot) === null || _p === void 0 ? void 0 : _p.querySelector('#emailInput');
        const pass = (_r = (_q = document.querySelector('password-input')) === null || _q === void 0 ? void 0 : _q.shadowRoot) === null || _r === void 0 ? void 0 : _r.querySelector('#passInput');
        const data = { name: name.value, email: email.value, password: pass.value };
        const apiIndex = new ApiIndex();
        const result = yield apiIndex.update(data);
        resultP.innerText = `Usuario Editado! \nid: ${result.id} \nnome: ${result.name} \nemail: ${result.email}`;
    }
    catch (error) {
        resultP.innerText = error.message;
    }
}));
