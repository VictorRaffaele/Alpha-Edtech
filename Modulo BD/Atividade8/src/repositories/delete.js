import {pool} from "../services/index.js";

export class Delete{

    async del_prod(req, res){
        const client = await pool.connect();
        const param_name = req.params.name;
        const select_id = `SELECT id FROM varejo.product WHERE product."name" = $1`;
        const del = 'DELETE FROM varejo.product WHERE id = $1';
        try{
            const name_id = await client.query(select_id, [param_name]);
            const result = await client.query(del, [name_id.rows[0].id]);
            res.status(200).json(result.rows);
        } catch(error){
            res.status(500).send({message:`${error}`});
        } finally{
            client.release();
        }
    }

    async del_user(req, res){
        const client = await pool.connect();
        const param_name = req.params.name;
        const select_id = `SELECT id FROM varejo."user" WHERE "name" = $1`;
        const del = 'DELETE FROM varejo."user" WHERE id = $1';
        try{
            const name_id = await client.query(select_id, [param_name]);
            const result = await client.query(del, [name_id.rows[0].id]);
            res.status(200).json(result.rows);
        } catch(error){
            res.status(500).send({message:`${error}`});
        } finally{
            client.release();
        }
    }
}