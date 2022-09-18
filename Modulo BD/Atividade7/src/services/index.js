import {Router} from "express";
import {list_table} from "../controller/api/index.js";

export const route = Router();

route.get("/:type", list_table);