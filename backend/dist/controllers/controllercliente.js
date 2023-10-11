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
exports.updateCliente = exports.postCliente = exports.deleteCliente = exports.getCliente = exports.getClientes = void 0;
const modelsclientes_1 = require("../models/modelsclientes");
const getClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listClientes = yield modelsclientes_1.Cliente.findAll();
    res.json(listClientes);
});
exports.getClientes = getClientes;
const getCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cliente = yield modelsclientes_1.Cliente.findByPk(id);
    if (cliente) {
        res.json(cliente);
    }
    else {
        res.status(404).json({
            msg: `No existe un Usuario con el id ${id}`
        });
    }
});
exports.getCliente = getCliente;
const deleteCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cliente = yield modelsclientes_1.Cliente.findByPk(id);
    if (!cliente) {
        res.status(404).json({
            msg: `No existe un Usuario con el id ${id}`
        });
    }
    else {
        yield cliente.destroy();
        res.json({
            msg: "El usuario fue eliminado con Exito"
        });
    }
});
exports.deleteCliente = deleteCliente;
const postCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { Cedula } = req.body;
    const cliente = yield modelsclientes_1.Cliente.findOne({ where: { Cedula: Cedula } });
    if (cliente) {
        return res.status(400).json({
            msg: "Ya existe un usuario con ese numero de cedula " + Cedula
        });
    }
    try {
        yield modelsclientes_1.Cliente.create(body);
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
exports.postCliente = postCliente;
const updateCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const cliente = yield modelsclientes_1.Cliente.findByPk(id);
        if (cliente) {
            yield cliente.update(body);
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
exports.updateCliente = updateCliente;
