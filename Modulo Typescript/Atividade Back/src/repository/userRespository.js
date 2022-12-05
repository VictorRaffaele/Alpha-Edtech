var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { pool } from "./pool.js";
import { v4 as uuid4 } from "uuid";
class UserRespository {
    insertUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield pool.connect();
            const param_id = uuid4();
            const param_email = user.email;
            const param_name = user.name;
            const param_pass = user.password;
            const insert_user = `INSERT INTO public.accounts (id, name, email, password) VALUES ($1, $2, $3, $4) RETURNING id, name, email`;
            try {
                const result = yield client.query(insert_user, [param_id, param_name, param_email, param_pass]);
                return result.rows;
            }
            catch (error) {
                throw new Error(error.message);
            }
            finally {
                client.release();
            }
        });
    }
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield pool.connect();
            const param_email = user.email;
            const param_pass = user.password;
            const select_user = `SELECT id FROM public.accounts WHERE email = $1 AND password = $2`;
            try {
                const result = yield client.query(select_user, [param_email, param_pass]);
                return result.rows;
            }
            catch (error) {
                return { message: `${error}` };
            }
            finally {
                client.release();
            }
        });
    }
    updateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield pool.connect();
            const param_email = user.email;
            const param_name = user.name;
            const param_pass = user.password;
            const update_user = `UPDATE public.accounts SET name = $1, email = $2, password = $3 RETURNING id, email, name`;
            try {
                const result = yield client.query(update_user, [param_name, param_email, param_pass]);
                return result.rows;
            }
            catch (error) {
                return { message: `${error}` };
            }
            finally {
                client.release();
            }
        });
    }
}
export { UserRespository };
