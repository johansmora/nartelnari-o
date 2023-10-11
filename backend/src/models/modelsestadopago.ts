import { DataTypes } from "sequelize"
import sequelize from "../db/connection"
import { Pagos } from "./modelspagos"
 export const EstadoPago= sequelize.define('EstadoPago',{
    idEstadoPago:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:true
    },
    Nombre:{
        type:DataTypes.STRING,
        allowNull: false,
    }
})
EstadoPago.hasMany(Pagos)