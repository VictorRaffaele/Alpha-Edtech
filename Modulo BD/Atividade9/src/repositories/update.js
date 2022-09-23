import {pool} from "../services/index.js";

export class Update{

    async update_prod(req, res) {

        const client = await pool.connect();
        const param_old_name = req.params.old_name;
        const param_name = req.params.new_name;
        const param_categoty = req.params.category;
        const param_brand = req.params.brand;
        const param_price = req.params.price;
        const param_quant = req.params.quant;
        const select_cat = `SELECT id FROM varejo.category WHERE category."name" = $1`;
        const select_brand = `SELECT id FROM varejo.brand WHERE brand."name" = $1`;
        const select_name = `SELECT id FROM varejo.product WHERE product."name" = $1`;
        const update = `UPDATE varejo.product SET "name" = $1, category_id = $2, brand_id = $3, price = $4,
        quant = $5, update_at = NOW() WHERE id = $6 RETURNING *;`;
        
        try{
            const category = await client.query(select_cat, [param_categoty]);
            const brand = await client.query(select_brand, [param_brand]);
            const name_id = await client.query(select_name, [param_old_name]);
            const result = await client.query(update, [param_name, category.rows[0].id, brand.rows[0].id, param_price, param_quant, name_id.rows[0].id]);
            res.status(200).json(result.rows);
        } catch(error){
            res.status(500).send({message:`${error}`});
        } finally{
            client.release();
        }
    }

    async update_client(req, res){

        const client = await pool.connect();
        const param_name = req.params.name;
        const param_cpf = req.params.cpf;
        const param_email = req.params.email;
        const param_pass = req.params.password;
        const select_name = `SELECT id FROM varejo."user" WHERE "name" = $1`;
        const update = `UPDATE varejo."user" SET "name" = $1,  cpf = $2, email = $3, password = $4, 
        update_at = NOW() WHERE id = $5 RETURNING *;`;
        
        try{
            const name_id = await client.query(select_name, [param_name]);
            const result = await client.query(update, [param_name, param_cpf, param_email, param_pass, name_id.rows[0].id]);
            res.status(200).json(result.rows);
        } catch(error){
            res.status(500).send({message:`${error}`});
        } finally{
            client.release();
        }
    }

    async update_adm(req, res){

        const client = await pool.connect();
        const param_name = req.params.name;
        const param_cpf = req.params.cpf;
        const param_email = req.params.email;
        const param_pass = req.params.password;
        const select_name = `SELECT id FROM varejo."user" WHERE "name" = $1`;
        const update = `UPDATE varejo."user" SET "name" = $1,  cpf = $2, email = $3, password = $4, adm_perm = true, 
        update_at = NOW() WHERE id = $5 RETURNING *;`;
        
        try{
            const name_id = await client.query(select_name, [param_name]);
            const result = await client.query(update, [param_name, param_cpf, param_email, param_pass, name_id.rows[0].id]);
            res.status(200).json(result.rows);
        } catch(error){
            res.status(500).send({message:`${error}`});
        } finally{
            client.release();
        }
    }

    async update_prod_list(req, res){

        const client = await pool.connect();
        const quant = req.params.quant;
        const param_prod = req.params.prod;
        const select_prod = `SELECT id FROM varejo.product WHERE "name" = $1`;
        const select_price = 'SELECT product.price FROM varejo.product WHERE product.id= $1;';
        const update = `UPDATE varejo.product_list SET quantidade = $1, total_price = $2 WHERE product_id = $3 RETURNING *;`;
        
        try{
            const prod_id = await client.query(select_prod, [param_prod]);
            const price = await client.query(select_price, [prod_id.rows[0].id]);
            const result = await client.query(update, [quant, price.rows[0].price * quant, prod_id.rows[0].id]);
            res.status(200).json(result.rows);
        } catch(error){
            res.status(500).send({message:`${error}`});
        } finally{
            client.release();
        }
    }
}