import { Insert } from "../repositories/insert.js";
import {pool} from "../repositories/pool.js";

const insert = new Insert();

export class Services{

    async cart(req, res){
        const client = await pool.connect();
        const name = req.params.client;
        const prod = req.params.prod;
        const quant = parseInt(req.params.quant);
        const cart_func = insert.insert_cart();
        const save_point = `BEGIN; SAVEPOINT my_savepoint;`;
        const rollback = 'ROLLBACK TO my_savepoint;';
        try{
            const id_client = await client.query(cart_func.select_id_user, [name]);
            const id_prod = await client.query(cart_func.select_id_prod, [prod]);
            await client.query(cart_func.insert_car, [id_client.rows[0].id]);
            const id_cart = await client.query(cart_func.select_id_cart, [id_client.rows[0].id]);
            const price = await client.query(cart_func.select_price, [id_prod.rows[0].id]);
            const quant_prods = await client.query(cart_func.select_quant_prod, [id_prod.rows[0].id]);
            client.query(save_point);
            const result = await client.query(cart_func.insert_prod_list, [id_prod.rows[0].id, quant, id_cart.rows[0].id, price.rows[0].price * quant]);
            if(quant > quant_prods.rows[0].quant){
                client.query(rollback);
                res.status(200).send({message:'Too many products'});
            } else{
                res.status(200).json(result.rows);
            }
        } catch(error){
            res.status(500).send({message:`${error}`});
        } finally{
            client.release();
        }
    }

    async demand(req, res){
        const client = await pool.connect();
        let total = 0;
        const name = req.params.client;
        const demand_head = insert.demand_head();
        const save_point = `BEGIN; SAVEPOINT my_savepoint;`;
        const rollback = 'ROLLBACK TO my_savepoint;';
        const commit = 'COMMIT;';
        try{
            const id_client = await client.query(demand_head.select_id_user, [name]);
            const id_cart = await client.query(demand_head.select_id_cart, [id_client.rows[0].id]);
            const prod = await client.query(demand_head.select_id_prod, [id_cart.rows[0].id]);
            const price = await client.query(demand_head.select_price, [id_cart.rows[0].id]);
            const quant_list = await client.query(demand_head.select_quant, [id_cart.rows[0].id]);
            const quant_prod = await client.query(demand_head.select_quant_prods, [prod.rows[0].product_id]);
            for (let index = 0; index < price.rows.length; index++) {
                total += price.rows[index].total_price;
            }
            client.query(save_point);
            const result = await client.query(demand_head.insert_demand, [id_cart.rows[0].id, total]);
            await client.query(demand_head.remove_prods, [quant_list.rows[0].quantidade, prod.rows[0].product_id]);
            if (quant_list.rows[0].quantidade > quant_prod.rows[0].quant) {
                client.query(rollback);
                res.status(200).send({message:'Too many products'})
            }else{
                client.query(commit);
                res.status(200).json(result.rows);
            }
        } catch(error){
            res.status(500).send({message:`${error}`});
        } finally{
            client.release();
        }
    }

}