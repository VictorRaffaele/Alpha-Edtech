import {Router} from "express";
import {UserController} from "../controller/userController.js";

export const route = Router();
const userController = new UserController();

route.post('/accounts/', userController.create);
route.post('/accounts/login', userController.login);
route.patch('/accounts/', userController.update);