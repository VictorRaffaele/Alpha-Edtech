import express from "express";
import {route} from "./index.js";

export class Api{
    start() {
        const app = express();
        const port = 8081;
    
        app.use(express.json());
        app.use(express.urlencoded({extended:true}));
        app.use("/", route);
        app.listen(port, () => {console.log(`Servidor criado: http://localhost:${port}`)});
    }
}