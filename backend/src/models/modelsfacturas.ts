import { DataTypes } from "sequelize"
import sequelize from "../db/connection"
export const Factura= sequelize.define('historialfactura',{
    idFactura:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:true
    },
    MontoPagado:{
        type:DataTypes.DATE,
        allowNull:false
    },
    DiaPagado:{
        type:DataTypes.STRING,
        allowNull:true
    }
    
})


