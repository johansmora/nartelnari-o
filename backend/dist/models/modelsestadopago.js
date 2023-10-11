"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadoPago = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const modelspagos_1 = require("./modelspagos");
exports.EstadoPago = connection_1.default.define('EstadoPago', {
    idEstadoPago: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    Nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
});
exports.EstadoPago.hasMany(modelspagos_1.Pagos);
