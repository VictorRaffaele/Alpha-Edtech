import {pool} from "../../repositories/index.js";

export async function list_table(req, res) {
    const client = await pool.connect();
    try{
        const result = await client.query(`SELECT * FROM varejo.${req.params.type}`);
        res.status(200).json(result.rows);
    } catch(error){
        res.status(500).send({message:`${error}`});
    } finally{
        client.release();
    }
}