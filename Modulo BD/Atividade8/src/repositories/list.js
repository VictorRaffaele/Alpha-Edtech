import {pool} from "../services/index.js";

export class List {

    async list_prod_asc(req, res) {
        const client = await pool.connect();
        const param_categoty = req.params.category;
        const param_brand = req.params.brand;
        const select_cat = `SELECT id FROM varejo.category WHERE category."name" = $1`;
        const select_brand = `SELECT id FROM varejo.brand WHERE brand."name" = $1`;
        const select_table = `SELECT * FROM varejo.product WHERE product.category_id = $1 AND product.brand_id = $2 ORDER BY product.price ASC;`
        try{
            const category = await client.query(select_cat, [param_categoty]);
            const brand = await client.query(select_brand, [param_brand]);
            const result = await client.query(select_table, [category.rows[0].id, brand.rows[0].id]);
            res.status(200).json(result.rows);
        } catch(error){
            res.status(500).send({message:`${error}`});
        } finally{
            client.release();
        }
    }

    async list_prod_desc(req, res) {
        const client = await pool.connect();
        const param_categoty = req.params.category;
        const param_brand = req.params.brand;
        const select_cat = `SELECT id FROM varejo.category WHERE category."name" = $1`;
        const select_brand = `SELECT id FROM varejo.brand WHERE brand."name" = $1`;
        const select_table = `SELECT * FROM varejo.product WHERE product.category_id = $1 AND product.brand_id = $2 ORDER BY product.price DESC;`
        try{
            const category = await client.query(select_cat, [param_categoty]);
            const brand = await client.query(select_brand, [param_brand]);
            const result = await client.query(select_table, [category.rows[0].id, brand.rows[0].id]);
            res.status(200).json(result.rows);
        } catch(error){
            res.status(500).send({message:`${error}`});
        } finally{
            client.release();
        }
    }

    async list_clients(req, res) {
        const client = await pool.connect();
        const select_client = `SELECT * FROM varejo."user" WHERE adm_perm = false`;
        try{
            const result = await client.query(select_client);
            res.status(200).json(result.rows);
        } catch(error){
            res.status(500).send({message:`${error}`});
        } finally{
            client.release();
        }
    }

    async list_adms(req, res) {
        const client = await pool.connect();
        const select_client = `SELECT * FROM varejo."user" WHERE adm_perm = true`;
        try{
            const result = await client.query(select_client);
            res.status(200).json(result.rows);
        } catch(error){
            res.status(500).send({message:`${error}`});
        } finally{
            client.release();
        }
    }

}
