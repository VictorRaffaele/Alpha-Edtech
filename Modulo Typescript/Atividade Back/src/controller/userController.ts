import { Request, Response } from "express";
import { UserRespository } from "../repository/userRespository.js"

export class UserController{
    async create(req: Request, res: Response) {
        try {
            if(!req.body.email){
                res.status(500).json({ error: 'Email invalido!' });
                return;
            }
            if (!req.body.name) {
                res.status(500).json({ error: 'Nome invalido!' });
                return;
            }
            if(!req.body.password){
                res.status(500).json({ error: 'Password invalido!' });
                return;
            }
            const user = {'email': req.body.email, 'name': req.body.name, 'password': req.body.password};
            const result = await new UserRespository().insertUser(user);
            res.status(201).json(result);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async login(req: Request, res: Response){
        try {
            if(!req.body.email){
                res.status(500).json({ error: 'Email invalido!' });
                return;
            }
            if(!req.body.password){
                res.status(500).json({ error: 'Password invalido!' });
                return;
            }
            const user = {'email': req.body.email, 'password': req.body.password};
            const result:any = await new UserRespository().login(user);
            if(result.length == 0){
                throw new Error('Usuario não encontrado!');
            }else{
                res.cookie("token", result[0].id, { secure: true, httpOnly: true, maxAge: 604800000, sameSite: "strict" });
            }
            res.status(201).json(result);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async verifyToken(req: Request, res: Response, next: any) {
        try {
            const token = req.get('cookie');
            if (!token) {
                res.status(401).json({ error: "not authorized" });
                return;
            }
            next();
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            if(!req.body.email){
                res.status(500).json({ error: 'Email invalido!' });
                return;
            }
            if (!req.body.name) {
                res.status(500).json({ error: 'Nome invalido!' });
                return;
            }
            if(!req.body.password){
                res.status(500).json({ error: 'Password invalido!' });
                return;
            }
            const user = {'email': req.body.email, 'name': req.body.name, 'password': req.body.password};
            const result = await new UserRespository().updateUser(user);
            res.status(201).json(result);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}

