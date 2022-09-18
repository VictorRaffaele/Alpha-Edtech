import {Router}  from "express";
import {addNewUser , listUser, editUser, delUser} from "../controllers/index.js"
export const route = Router();

route.post("/usuarios", addNewUser);
route.get("/usuarios", listUser);
route.put("/usuarios/:id", editUser);
route.delete("/usuarios/:id", delUser);