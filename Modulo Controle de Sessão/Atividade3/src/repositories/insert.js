import {pool} from "./pool.js";
import bcrypt from "bcrypt";

export class Insert{

    async insert_product(req, res) {
        const client = await pool.connect();
        const param_name = req.params.name;
        const param_categoty = req.params.category;
        const param_brand = req.params.brand;
        const param_price = req.params.price;
        const param_quant = req.params.quant;
        const select_cat = `SELECT id FROM varejo.category WHERE category."name" = $1`;
        const select_brand = `SELECT id FROM varejo.brand WHERE brand."name" = $1`;
        const insert = `INSERT INTO varejo.product (name, category_id, brand_id, price, quant) VALUES ($1, $2, $3, $4, $5) RETURNING *`
       
        try{
            const category = await client.query(select_cat, [param_categoty]);
            const brand = await client.query(select_brand, [param_brand]);
            const result = await client.query(insert, [param_name, category.rows[0].id, brand.rows[0].id, param_price, param_quant]);
            res.status(200).json(result.rows);
        } catch(error){
            res.status(500).send({message:`${error}`});
        } finally{
            client.release();
        }
    }

    async insert_user(req, res) {
        const client = await pool.connect();
        const name = req.params.name;
        const cpf = req.params.cpf;
        const email = req.params.email;
        const password = req.params.password;
        const insert = 'INSERT INTO varejo."user" (name, cpf, email, password) VALUES ($1, $2, $3, $4);'
       
        try{            
            const salt = bcrypt.genSaltSync(10);
            const hash =  bcrypt.hashSync(password, salt);
            const result = await client.query(insert, [name, cpf, email, hash]);
            res.status(200).json(result.rows);
        } catch(error){
            res.status(500).send({message:`${error}`});
        } finally{
            client.release();
        }
    }

    insert_cart(){

        return{
            select_id_user : 'SELECT id FROM varejo."user" WHERE "user".name = $1;',
            select_id_prod : 'SELECT id FROM varejo.product WHERE product.name = $1;',
            select_id_cart : 'SELECT id FROM varejo.cart WHERE client_id = $1',
            select_quant_prod : 'SELECT quant FROM varejo.product WHERE product.id = $1',
            select_price : 'SELECT product.price FROM varejo.product WHERE product.id= $1;',
            insert_car : 'INSERT INTO varejo.cart (client_id) VALUES ($1) ON CONFLICT (client_id) DO NOTHING;',
            insert_prod_list : 'INSERT INTO varejo.product_list(product_id, quantidade, cart_id, total_price) VALUES ($1, $2, $3, $4) RETURNING *;'
        }

    }

    demand_head(){

        return{
            select_id_user : 'SELECT id FROM varejo."user" WHERE "user".name = $1;',
            select_id_cart : 'SELECT id FROM varejo.cart WHERE client_id = $1;',
            select_id_prod : 'SELECT product_id FROM varejo.product_list WHERE cart_id = $1;',
            select_price : 'SELECT total_price FROM varejo.product_list WHERE cart_id = $1;',
            select_quant : 'SELECT quantidade FROM varejo.product_list WHERE cart_id = $1;',
            select_quant_prods : 'SELECT quant FROM varejo.product WHERE product.id = $1;',
            insert_demand : `INSERT INTO varejo.demand (status, cart_id, total) VALUES('Aguardando Pagamento!', $1, $2) RETURNING *;`,
            remove_prods : 'UPDATE varejo.product SET quant = quant - $1 WHERE product.id = $2;'
        }
    }   
}