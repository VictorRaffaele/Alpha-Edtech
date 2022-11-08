export class UserController{
    async create(req, res) {
        try {
            if(!req.body.email){
                res.status(500).json({ error: 'Email invalido!' });
                return;
            }
            if (!req.body.name) {
                res.status(500).json({ error: 'Nome invalido!' });
                return;
            }
            if(!req.body.password){
                res.status(500).json({ error: 'Password invalido!' });
                return;
            }
            res.status(201).json('Criado!');
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }

    async login(req, res){
        try {
            if(!req.body.email){
                res.status(500).json({ error: 'Email invalido!' });
                return;
            }
            if(!req.body.password){
                res.status(500).json({ error: 'Password invalido!' });
                return;
            }
            res.status(201).json('Logado!');
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            if(!req.body.email){
                res.status(500).json({ error: 'Email invalido!' });
                return;
            }
            if (!req.body.name) {
                res.status(500).json({ error: 'Nome invalido!' });
                return;
            }
            if(!req.body.password){
                res.status(500).json({ error: 'Password invalido!' });
                return;
            }
            res.status(201).json('Atualizado!');
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }
}

