import dotenv from "dotenv";
import express from "express";
import {route} from "./index.js";
import cookieParser from "cookie-parser";

dotenv.config({ path: "./env/.env" });

export class Api{
    start() {
        const app = express();
        const port = process.env.PORT;

        app.use(express.json());
        app.use(express.urlencoded({extended:true}));
        app.use(cookieParser());
        app.use("/", express.static('src/public'));
        app.use("/", route);
        app.listen(port, () => {console.log(`Servidor criado: http://${process.env.NODE_ENV}:${port}`)});
    }
}