import { delUser } from "../database/index.js";

export function deleteUser(req, res) {
    
    try {
        delUser(req.params.id);
        res.status(200).json({message:"Usuario Deletado!"});
    } catch (error) {
        res.status(500).send({message:`${error}`});
    }
}