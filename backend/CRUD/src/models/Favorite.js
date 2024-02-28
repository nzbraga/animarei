const { Model, DataTypes } = require('sequelize');

class Favorite extends Model {
    static init(sequelize) {
        return super.init(
            {
                title: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                image: {
                    type: DataTypes.BLOB('long'),
                    allowNull: true
                },
                description: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                user_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'Users', 
                        key: 'id'
                    },
                    onDelete: 'CASCADE'
                },
                episodes_total: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                episodes_current: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
            },
            {
                sequelize
            }
        );
    }
}

module.exports = Favorite;
