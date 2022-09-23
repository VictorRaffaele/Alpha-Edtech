import {pool} from "../services/index.js";

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
            const result = await client.query(insert, [name, cpf, email, password]);
            res.status(200).json(result.rows);
        } catch(error){
            res.status(500).send({message:`${error}`});
        } finally{
            client.release();
        }
    }

    async insert_cart(req, res){
        const client = await pool.connect();
        const name = req.params.client;
        const prod = req.params.prod;
        const quant = req.params.quant;
        const select_id_user = 'SELECT id FROM varejo."user" WHERE "user".name = $1;';
        const select_id_prod = 'SELECT id FROM varejo.product WHERE product.name = $1;';
        const select_id_cart = 'SELECT id FROM varejo.cart WHERE client_id = $1';
        const select_price = 'SELECT product.price FROM varejo.product WHERE product.id= $1;';
        const insert_car = 'INSERT INTO varejo.cart (client_id) VALUES ($1) ON CONFLICT (client_id) DO NOTHING;';
        const insert_prod_list = 'INSERT INTO varejo.product_list(product_id, quantidade, cart_id, total_price) VALUES ($1, $2, $3, $4) RETURNING *;';
        
        try{
            const id_client = await client.query(select_id_user, [name]);
            const id_prod = await client.query(select_id_prod, [prod]);
            const create_cart = await client.query(insert_car, [id_client.rows[0].id]);
            const id_cart = await client.query(select_id_cart, [id_client.rows[0].id]);
            const price = await client.query(select_price, [id_prod.rows[0].id]);
            const result = await client.query(insert_prod_list, [id_prod.rows[0].id, quant, id_cart.rows[0].id, price.rows[0].price * quant]);
            res.status(200).json(result.rows);
        } catch(error){
            res.status(500).send({message:`${error}`});
        } finally{
            client.release();
        }
    }
}