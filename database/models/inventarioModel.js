const { Model, DataTypes, Sequelize, DataTypes } = require("sequelize");

const Inventary = "inventary";

const InventarySchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    availibility: {
        allowNull: true,
        type: DataTypes.STRING
    }
}