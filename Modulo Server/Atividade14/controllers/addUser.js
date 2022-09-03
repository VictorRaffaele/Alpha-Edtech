import {addUser} from "../database/index.js"

export function addNew (req, res) {

    try {
        const data = req.body;
        addUser(data);
        res.status(200).json({message:"Usuario adicionado!"});
    } catch (error) {
        res.status(500).send({message:`${error}`});
    }
}
