const Sequelize = require('sequelize')
const configDB = require('../config/database')

const User = require('../models/User')
const Favorite = require('../models/Favorite')
const Friend = require('../models/Friend')

const connection = new Sequelize(configDB)


User.init(connection)
Favorite.init(connection)
Friend.init(connection)

module.exports = connection