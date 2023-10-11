import { DataTypes } from "sequelize"
import sequelize from "../db/connection"
 export const User= sequelize.define('User',{
    idUser:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:true
    },
    Usuario:{
        type:DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    Contraseña:{
        type:DataTypes.STRING,
        allowNull:false
    }
})