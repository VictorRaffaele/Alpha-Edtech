var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ApiIndex {
    register(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const options = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) };
                const response = yield fetch("/accounts/", options);
                if (!response.ok || response.status == 500) {
                    const message = yield response.json();
                    throw new Error(message.error);
                }
                const result = yield response.json();
                const resp = { 'id': result[0].id, 'email': result[0].email, 'name': result[0].name };
                return resp;
            }
            catch (error) {
                throw error;
            }
        });
    }
    login(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const options = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) };
                const response = yield fetch("/accounts/login", options);
                if (!response.ok || response.status == 500) {
                    const message = yield response.json();
                    throw new Error(message.error);
                }
                const result = yield response.json();
                return result;
            }
            catch (error) {
                throw error;
            }
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const options = { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) };
                const response = yield fetch("/accounts", options);
                if (!response.ok || response.status == 500) {
                    const message = yield response.json();
                    throw new Error(message.error);
                }
                const result = yield response.json();
                console.log(result)
                const resp = { 'id': result[0].id, 'email': result[0].email, 'name': result[0].name };
                return resp;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
export { ApiIndex };
