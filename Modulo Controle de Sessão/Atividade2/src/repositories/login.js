import {pool} from "./pool.js";

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
        const query = 'SELECT id FROM varejo.user WHERE name = $1'
        try {
            const result = await client.query(query, [user]);
            const token = result.rows[0].id;
            res.cookie("user", user);
            res.cookie("token", token);
            res.status(200).send({message:'Cookie created'});
        } catch (error) {
            res.status(500).send({message:`${error}`});
        } 
    }

    async userType(req, res){
        const client = await pool.connect();
        const username = req.cookies['user'];
        const token = req.cookies['token']
        const query = `SELECT adm_perm FROM varejo.user WHERE name = $1 AND id = $2`;
        try {
            const result = await client.query(query, [username, token]);
            res.status(200).json(result.rows[0].adm_perm);
        } catch (error) {
            res.status(500).send({message:`${error}`});
        } finally{
            client.release();
        }
    }

    async confUser(req, res){
        const client = await pool.connect();
        const username = req.cookies['user'];
        const token = req.cookies['token'];
        const query = `SELECT name, id FROM varejo.user WHERE name = $1 AND id = $2`;
        try {
            const result = await client.query(query, [username, token]);
            if (result.rows[0]) {
                res.status(200).send({message:'User Confirmed!'});
            } else{
                res.status(200).send({message:'User Denied!'});
            }
        } catch (error) {
            res.status(500).send({message:`${error}`});
        } finally{
            client.release();
        }
    }
    
}