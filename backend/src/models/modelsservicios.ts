import { DataTypes } from "sequelize"
import sequelize from "../db/connection"
import { Pagos } from "./modelspagos";
 export const Servicios= sequelize.define('servicio',{
    idServicios:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:true
    },
    tipo:{
        type:DataTypes.STRING,
        allowNull: false
    },
    Tarifa:{
        type:DataTypes.STRING,
        allowNull:true
    }

},

);
Servicios.hasMany(Pagos)