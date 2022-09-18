import { editUser } from "../database/index.js";

export function editInfo(req, res) {

    try {
        const data = req.body;
        editUser(req.params.id, data);
        res.status(200).json({message:"Usuario Editado!"})
    } catch (error) {
        res.status(500).send({message:`${error}`});
    }
}