import express from "express";
import {route} from "./routes/index.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/", express.static('./front-end'));
app.use("/", route);
app.listen(port, () => {console.log(`Servidor criado: http://localhost:${port}`)});