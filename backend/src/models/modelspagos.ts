import { DataTypes } from "sequelize"
import sequelize from "../db/connection"
import { Factura } from "./modelsfacturas"
export const Pagos= sequelize.define('factura',{
    idFactura:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:true
    },
    FechaEmision:{
        type:DataTypes.DATE,
        allowNull:false
    },
    FechaVencimiento:{
        type:DataTypes.DATE,
        allowNull:true
    }
    
})
Pagos.hasMany(Factura)
