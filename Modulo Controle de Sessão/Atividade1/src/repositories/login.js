import {pool} from "./pool.js";
import {v4} from "uuid";
export class Login{

    async login(req, res){
        const client = await pool.connect();
        const user = req.params.user;
        const password = req.params.password;
        const query = `SELECT name, password FROM varejo.user WHERE name = $1 AND password = $2`;
        try {
            const result = await client.query(query, [user, password]);
            res.status(200).json(result.rows);
        } catch (error) {
            res.status(500).send({message:`${error}`});
        } finally{
            client.release();
        }
    }

    async generateToken(req, res){
        const client = await pool.connect();
        const user = req.params.user;
        const token = v4();
        const selectId = `SELECT id FROM varejo.user WHERE name = $1`;
        const query = `UPDATE varejo.user SET loged = $1 WHERE id = $2 RETURNING loged`;
        try {
            const id = await client.query(selectId, [user]);
            const result = await client.query(query, [token, id.rows[0].id]);
            res.status(200).json(result.rows);
        } catch (error) {
            res.status(500).send({message:`${error}`});
        } finally{
            client.release();
        }
    }

    async userType(req, res){
        const client = await pool.connect();
        const token = req.params.token;
        const selectPerm = `SELECT adm_perm FROM varejo.user WHERE loged = $1`;
        try {
            const result = await client.query(selectPerm, [token]);
            res.status(200).json(result.rows);
        } catch (error) {
            res.status(500).send({message:`${error}`});
        } finally{
            client.release();
        }
    }
}