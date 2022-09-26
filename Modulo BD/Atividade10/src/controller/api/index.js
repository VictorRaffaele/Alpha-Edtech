import {Router} from "express";
import { Index } from "../../repositories/index.js";
import { Services } from "../../services/index.js";

export const route = Router();
const index = new Index();
const services = new Services();

//Requests Product 
route.post("/insert_prod/:name/:category/:brand/:price/:quant", index.insert.insert_product);
route.put("/update_prod/:old_name/:new_name/:category/:brand/:price/:quant", index.update.update_prod);
route.get("/prod_asc/:category/:brand", index.list.list_prod_asc);
route.get("/prod_desc/:category/:brand", index.list.list_prod_desc);
route.delete("/del_prod/:name", index.del.del_prod);

//Requests Users
route.post("/insert_user/:name/:cpf/:email/:password", index.insert.insert_user);
route.put("/update_client/:name/:cpf/:email/:password", index.update.update_client);
route.put("/update_adm/:name/:cpf/:email/:password", index.update.update_adm);
route.get("/clients", index.list.list_clients);
route.get("/adms", index.list.list_adms);
route.delete("/del_user/:name", index.del.del_user);

//Request Cart
route.post("/insert_prod/:client/:prod/:quant", services.cart);
route.put("/update_prod_list/:prod/:quant", index.update.update_prod_list);
route.get("/list_prod", index.list.list_prods);
route.delete("/del_prod_list/:prod", index.del.del_prod_list);

//Request Demand
route.post("/insert_demand/:client", services.demand);