"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePago = exports.createPago = exports.deletePago = exports.getPagoById = exports.getAllPagos = void 0;
const modelspagos_1 = require("../models/modelspagos");
const getAllPagos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listPagos = yield modelspagos_1.Pagos.findAll();
    res.json(listPagos);
});
exports.getAllPagos = getAllPagos;
const getPagoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const pago = yield modelspagos_1.Pagos.findByPk(id);
    if (pago) {
        res.json(pago);
    }
    else {
        res.status(404).json({
            msg: `El usuario no tiene un pago con esa id ${id}`
        });
    }
});
exports.getPagoById = getPagoById;
const deletePago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const pago = yield modelspagos_1.Pagos.findByPk(id);
    if (!pago) {
        res.status(404).json({
            msg: `El pago del usuario no a sido registrado ${id}`
        });
    }
    else {
        yield pago.destroy();
        res.json({
            msg: "El usuario fue eliminado con Exito"
        });
    }
});
exports.deletePago = deletePago;
const createPago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield modelspagos_1.Pagos.create(body);
        res.json({
            msg: "El usuario fue agregado con exito!"
        });
    }
    catch (error) {
        res.json({
            msg: "Upss ocurrio un error comuniquese con el administrador",
            error
        });
    }
});
exports.createPago = createPago;
const updatePago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const pago = yield modelspagos_1.Pagos.findByPk(id);
        if (pago) {
            yield pago.update(body);
            res.json({
                msg: "El Usuario fue actualizado con exito"
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un Usuario con el id ${id}`
            });
        }
    }
    catch (error) {
        res.json({
            msg: "Upss ocurrio un error comuniquese con el administrador",
            error
        });
    }
});
exports.updatePago = updatePago;
