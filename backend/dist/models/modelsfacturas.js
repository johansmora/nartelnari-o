"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factura = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Factura = connection_1.default.define('historialfactura', {
    idFactura: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    MontoPagado: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    DiaPagado: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
});
