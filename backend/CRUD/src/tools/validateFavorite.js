const Favorite = require('../models/Favorite')

module.exports = {
    
    async validFavorite(req,res,next){
        
        const { title,user_id } = req.body;

        let favorite = await Favorite.findOne({ where: { title: title } });
        let userId = await Favorite.findOne({ where: { user_id: user_id  } });  
   
        
        if (favorite && userId) {
            return res.status(400).json({ error: 'Favorito já cadastrado.' });
        }     
    next()
}
}