"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const modelspagos_1 = require("./modelspagos");
exports.Cliente = connection_1.default.define('Cliente', {
    idCliente: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    PrimerNombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    SegundoNombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    PrimerApellido: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    SegundoApellido: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    TipoCedula: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    Cedula: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    Direccion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Barrio: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Celular: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    EstadoUsuario: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true
    },
});
exports.Cliente.hasMany(modelspagos_1.Pagos);
