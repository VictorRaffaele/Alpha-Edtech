var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { request } from "http";
import { UserRespository } from "../repository/userRespository.js";
export class UserController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body.email) {
                    res.status(500).json({ error: 'Email invalido!' });
                    return;
                }
                if (!req.body.name) {
                    res.status(500).json({ error: 'Nome invalido!' });
                    return;
                }
                if (!req.body.password) {
                    res.status(500).json({ error: 'Password invalido!' });
                    return;
                }
                const user = { 'email': req.body.email, 'name': req.body.name, 'password': req.body.password };
                const result = yield new UserRespository().insertUser(user);
                res.status(201).json(result);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body.email) {
                    res.status(500).json({ error: 'Email invalido!' });
                    return;
                }
                if (!req.body.password) {
                    res.status(500).json({ error: 'Password invalido!' });
                    return;
                }
                const user = { 'email': req.body.email, 'password': req.body.password };
                const result = yield new UserRespository().login(user);
                if (result.length == 0) {
                    throw new Error('Usuario não encontrado!');
                }
                else {
                    res.cookie("token", result[0].id, { secure: true, httpOnly: true, maxAge: 604800000, sameSite: "strict" });
                }
                res.status(201).json(result);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
    verifyToken(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.get('cookie'))
                const token = req.get('cookie');
                if (!token) {
                    res.status(401).json({ error: "not authorized" });
                    return;
                }
                next();
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body.email) {
                    res.status(500).json({ error: 'Email invalido!' });
                    return;
                }
                if (!req.body.name) {
                    res.status(500).json({ error: 'Nome invalido!' });
                    return;
                }
                if (!req.body.password) {
                    res.status(500).json({ error: 'Password invalido!' });
                    return;
                }
                const user = { 'email': req.body.email, 'name': req.body.name, 'password': req.body.password };
                const result = yield new UserRespository().updateUser(user);
                res.status(201).json(result);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
}
