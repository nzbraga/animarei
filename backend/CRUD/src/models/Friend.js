const { Model, DataTypes } = require('sequelize');
const FriendController = require('../controller/FriendController');

class Friend extends Model {
    static init(sequelize) {
        return super.init(
            {               
                user_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'Users', 
                        key: 'id'
                    },
                    onDelete: 'CASCADE'
                },
                friend_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'Users', 
                        key: 'id'
                    },
                    onDelete: 'CASCADE'
                }
            },
            {
                sequelize
            }
        );
    }
}

module.exports = Friend;
