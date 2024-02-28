// controllers/userController.js
require('dotenv').config()

const { where } = require('sequelize');
const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports = {
    async userCreate(req, res) {
        
            const { name, email, password} = req.body;    
            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(password, salt);
    
            const newUser = await User.create({
                name,
                email,
                password: passwordHash,
            });
    
           res.status(200).json({ user: { name, email }, msg: "Cadastrado com sucesso" });

    },
    async login(req, res) {

        const { email, password } = req.body
        const user = await User.findOne({ where: { email: email } });
        const checkPassword = await bcrypt.compare(password, user.password)

        if (!checkPassword) {
            res.status(400).json({ error: 'email ou senha incorretos' });
        }
        try {
            const secret = process.env.SECRET
            const token = jwt.sign({ id: user._id }, secret,)
            const newUser = {id:user.id, name:user.name, email:user.email, token}
            res.status(200).json({ user:newUser ,msg: "Autenticado com sucesso!"})
        } catch (error) {
            console.log(error)

        }

    },
    async userUpdate(req, res) {
        try {            
            const { id, name, email, password, image, token } = await req.body;
            const user = await User.findOne({ where: { id } })

            if (!user) {
                res.status(400).json({ error: 'nao encontrado' });
            } else {
                const user = await User.update({ name, email, password, image, token }, { where: { id } })
                res.status(200).json({ user: { name, email } })
                return user
            }

        } catch (error) {
            res.status(400).json({ error: 'Erro ao atualizar Usuario.' });
            //console.log({error})
        }
    },
    
    async usersList(req, res) {

        try {
            const users = await User.findAll()

            if (!users) {
                res.status(200).json({ message: "nenhum resultado encontrado" })
            } else {

                //const users = User.findAll()
                res.status(200).json({ users })
                return users
            }
        } catch (error) {

        }
    },
    
    async userDelete(req, res) {
        
        const { id } = req.body
        const user = await User.findOne({ where: { id } })

        if (!user) {
            res.status(200).json({ message: "nenhum resultado encontrado" })
        } else {
            const user = await User.destroy({ where: { id } })
            res.status(200).json({ msg: "Usuario apagado com sucesso" })
        }
    },
    async userGet(req, res) {

        const { id } = req.body
        const user = await User.findOne({ where: { id } })
       
        if (!user) {
            res.status(400).json({ message: "nenhum resultado encontrado" })
        } else {            
            res.status(200).json({ user: { id:user.id, name:user.name, email:user.email } })
            return user
        }
    }
};
