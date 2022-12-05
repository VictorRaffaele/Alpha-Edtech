import {pool} from "./pool.js";
import {v4 as uuid4} from "uuid";

class UserRespository{

    async insertUser(user: any) {
        const client = await pool.connect();
        const param_id = uuid4();
        const param_email = user.email;
        const param_name = user.name;
        const param_pass = user.password;
        const insert_user = `INSERT INTO public.accounts (id, name, email, password) VALUES ($1, $2, $3, $4) RETURNING id, name, email`;       
        try{
            const result = await client.query(insert_user, [param_id, param_name, param_email, param_pass]);
            return result.rows;
        } catch(error: any){
            throw new Error(error.message);
        } finally{
            client.release();
        }
    }

    async login(user: any) {
        const client = await pool.connect();
        const param_email = user.email;
        const param_pass = user.password;
        const select_user = `SELECT id FROM public.accounts WHERE email = $1 AND password = $2`;       
        try{
            const result = await client.query(select_user, [param_email, param_pass]);
            return result.rows;
        } catch(error){
            return {message:`${error}`};
        } finally{
            client.release();
        }
    }

    async updateUser(user: any) {
        const client = await pool.connect();
        const param_email = user.email;
        const param_name = user.name;
        const param_pass = user.password;
        const update_user = `UPDATE public.accounts SET name = $1, email = $2, password = $3 RETURNING id, email, name`;       
        try{
            const result = await client.query(update_user, [param_name, param_email, param_pass]);
            return result.rows;
        } catch(error){
            return {message:`${error}`};
        } finally{
            client.release();
        }
    }
}

export {UserRespository};