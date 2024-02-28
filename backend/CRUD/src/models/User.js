const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        return super.init(
            {
                name: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                image: {
                    type: DataTypes.BLOB('long'),
                    allowNull: true
                }
            },
            {
                sequelize
            }
        );
    }
}

module.exports = User;
