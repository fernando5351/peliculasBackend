const { Model, DataTypes, Sequelize } = require("sequelize");

const Category = "category";

const categorySchema = {
    idModel: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING
    }
}