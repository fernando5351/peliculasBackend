const { Model, DataTypes, Sequelize } = require("sequelize");

const Movie = "movies";

const MovieSchema = {
    idMovie: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    duration: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING
    },
    year: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
}