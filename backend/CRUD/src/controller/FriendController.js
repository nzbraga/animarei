
const { where } = require('sequelize');
const Friend = require('../models/Friend');

module.exports = {
    async friendCreate(req, res) {
        
        const {  
            user_id,
            friend_id
        } = req.body;
     
        const newFriend = await Friend.create({           
            
            user_id,
            friend_id
        });
        
        console.log(newFriend)

        res.status(200).json({msg: "Adicionado Amigo com sucesso" });

    },
    
    async friendsList(req, res) {
        try {
            
            const { user_id } = req.body; // Certifique-se de que o user_id é passado corretamente
            const friends = await Friend.findAll({ where: { user_id } });
    
            if (!friends) {
                return res.status(200).json({ message: "Nenhum resultado encontrado" });
            } else {                
                res.status(200).json({ friends });
                return friends;
            }
        } catch (error) {
            console.error(error); // Log do erro para depuração
            return res.status(400).json({ error: "Falha ao listar Amigos" });
        }
    },
    async friendDelete(req, res) {

        const { user_id, friend_id } = req.body;

        let friend = await Friend.findOne({ where: { user_id , friend_id}  }); 
        const id = friend.id
       
        if (!friend) {
            res.status(200).json({ message: "nenhum resultado encontrado" })
        } else {
            const friend = await Friend.destroy({ where: { id } })
            res.status(200).json({ msg: "Amigo apagado com sucesso" })
        }
        
    },  
};
