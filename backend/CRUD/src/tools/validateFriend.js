const Friend = require('../models/Friend')

module.exports = {
    
    
    async validFriend(req,res,next){
        
        const { user_id, friend_id } = req.body;

        let friend = await Friend.findOne({ where: { user_id , friend_id}  });  
        
        if (user_id === friend_id){
            return res.status(400).json({ error: 'Não é possivel adicionar a si mesmo como amigo' });
        }
        
        if (friend) {
            return res.status(400).json({ error: 'Amigo ja adicionado.' });
        }   
       
      
             
         
    next()

}
}