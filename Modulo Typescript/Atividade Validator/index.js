import dotenv from "dotenv";
import express from "express";
import {route} from "./src/router/index.js";

dotenv.config({ path: "./env/.env" });

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/", express.static('src/public'));
app.use("/", route);
app.listen(port, () => {console.log(`Servidor criado: http://${process.env.NODE_ENV}:${port}`)});