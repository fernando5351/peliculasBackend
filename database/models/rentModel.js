const {  Model, DataTypes, Sequelize } = require("sequelize");

const Rent =  "Rent";

const RentSchema = {
    id: {
        allowNull:  false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    dateRent: {
        allowNull: false,
        type: DataTypes.DATE
    },
    dateDevolution: {
        allowNull: false,
        type: DataTypes.DATE
    },
    //inventario
    //cliente   
}