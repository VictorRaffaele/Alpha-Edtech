import {pool} from "./pool.js";
import bcrypt from "bcrypt";

export class Login{

    async login(req, res){
        const client = await pool.connect();
        const user = req.body.user;
        const password = req.body.password;
        const query = `SELECT name, password FROM varejo.user WHERE name = $1`;
        try {
            const result = await client.query(query, [user]);
            if (bcrypt.compareSync(password, result.rows[0].password)) {
                res.status(200).json(result.rows);
            } else{
                throw new Error('Invalid Password!');
            }
        } catch (error) {
            res.status(500).send({message:`${error}`});
        } finally{
            client.release();
        }
    }

    
    async generateToken(req, res){
        const client = await pool.connect();
        const user = req.params.user;
        const query = 'SELECT password FROM varejo.user WHERE name = $1'
        try {
            const result = await client.query(query, [user]);
            const salt = bcrypt.genSaltSync(10);
            const token = bcrypt.hashSync(result.rows[0].password, salt);
            res.cookie("user", user);
            res.cookie("token", token);
            res.status(200).send({message:'Cookie created'});
        } catch (error) {
            res.status(500).send({message:`${error}`});
        } 
    }

    async verifyToken(req, res){
        const client = await pool.connect();
        const user = req.cookies['user'];
        const token = req.cookies['token'];
        const query = `SELECT password FROM varejo.user WHERE name =$1`;
        try {
            const pass = await client.query(query, [user]);
            if (bcrypt.compareSync(pass.rows[0].password, token)) {
                res.status(200).send({message:`Autorized`});
            }
        } catch (error) {
            res.status(500).send({message:`${error}`});
        } finally{
            client.release();
        }
    }

    async userType(req, res){
        const client = await pool.connect();
        const username = req.cookies['user'];
        const query = `SELECT adm_perm FROM varejo.user WHERE name = $1`;
        try {
            const result = await client.query(query, [username]);
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