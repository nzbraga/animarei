
const { where } = require('sequelize');
const Favorite = require('../models/Favorite');

module.exports = {
    async favoriteCreate(req, res) {

        const {
            title,
            image,
            description,
            user_id,
            episodes_total,
            episodes_current
        } = req.body;
     

        const newFavorite = await Favorite.create({
            title,
            image,
            description,
            user_id,
            episodes_total,
            episodes_current
        });
        
        console.log(newFavorite)

        res.status(200).json({title, msg: "Adicionado como Favorito com sucesso" });

    },
    async favoriteUpdate(req, res) {
       
        try {            
            const {
                id,
                title,
                image,
                description,
                user_id,
                episodes_total,
                episodes_current
             } = await req.body;
            const favorite = await Favorite.findOne({ where: { id } })

            if (!favorite) {
                res.status(400).json({ error: 'nao encontrado' });
            } else {
                const favorite = await Favorite.update({

                    title,
                    image,
                    description,
                    user_id,
                    episodes_total,
                    episodes_current

                 }, { where: { id } })
                res.status(200).json({ msg: "Atualizaco com sucesso" })
                return favorite
            }
        } catch (error) {
            res.status(400).json({ error: 'Erro ao atualizar Usuario.' });
            //console.log({error})
        }
    },

    async favoritesList(req, res) {
        try {
            
            const { user_id } = req.body; // Certifique-se de que o user_id é passado corretamente
            const favorites = await Favorite.findAll({ where: { user_id } });
    
            if (!favorites) {
                return res.status(200).json({ message: "Nenhum resultado encontrado" });
            } else {                
                res.status(200).json({ favorites });
                return favorites;
            }
        } catch (error) {
            console.error(error); // Log do erro para depuração
            return res.status(400).json({ error: "Falha ao listar favoritos" });
        }
    },
    async favoriteDelete(req, res) {

        const { id } = req.body
        const favorite = await Favorite.findOne({ where: { id } })

        if (!favorite) {
            res.status(200).json({ message: "nenhum resultado encontrado" })
        } else {
            const favorite = await Favorite.destroy({ where: { id } })
            res.status(200).json({ msg: "Favorito apagado com sucesso" })
        }
    },
    async favoriteGet(req, res) {

        const { id } = req.body
        const favorite = await Favorite.findOne({ where: { id } })

        if (!favorite) {
            res.status(400).json({ message: "nenhum resultado encontrado" })
        } else {
            res.status(200).json({ favorite: {
                id: favorite.id,
                title: favorite.title,
                user_id: favorite.user_id,
                description: favorite.description,
                episodes_total: favorite.episodes_total,
                episodes_current: favorite.episodes_current
             } })
            return favorite
        }
    }
};
