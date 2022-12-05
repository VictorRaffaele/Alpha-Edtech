import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import { route } from "../src/router/index.js";
dotenv.config({ path: "./env/.env" });
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.app.use(express.json());
        this.app.use("/", express.static('src/public'));
        this.app.use("/", route);
        this.app.use(cookieParser());
        this.app.listen(this.port, () => { console.log(`Servidor criado: http://${process.env.NODE_ENV}:${this.port}`); });
    }
}
new Server();
