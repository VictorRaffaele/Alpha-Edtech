import {list} from "../database/index.js"

export function listUsers (req, res){
    
    try {
        res.status(200).json(list());
    } catch (error) {
        res.status(500).send({message:`${error}`});
    }
}