"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagos = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const modelsfacturas_1 = require("./modelsfacturas");
exports.Pagos = connection_1.default.define('factura', {
    idFactura: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    FechaEmision: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    FechaVencimiento: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    }
});
exports.Pagos.hasMany(modelsfacturas_1.Factura);
