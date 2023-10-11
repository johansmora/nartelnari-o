import { DataTypes } from "sequelize"
import sequelize from "../db/connection"
import {Pagos}  from "./modelspagos";
 export const Cliente= sequelize.define('Cliente',{
    idCliente:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:true
    },
    PrimerNombre:{
        type:DataTypes.STRING,
        allowNull: false
    },
    SegundoNombre:{
        type:DataTypes.STRING,
        allowNull:true
    },
    PrimerApellido:{
        type:DataTypes.STRING,
        allowNull:false
    },
    SegundoApellido:{
        type:DataTypes.STRING,
        allowNull:true
    },
    TipoCedula:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Cedula:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    Direccion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    Barrio:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    Celular:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    EstadoUsuario:{
        type:DataTypes.BOOLEAN,
        allowNull:true
    },

},

);
Cliente.hasMany(Pagos)
