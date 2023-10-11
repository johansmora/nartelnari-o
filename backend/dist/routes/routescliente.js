"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllercliente_1 = require("../controllers/controllercliente");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
router.get('/', validate_token_1.default, controllercliente_1.getClientes);
router.get('/:id', validate_token_1.default, controllercliente_1.getCliente);
router.delete('/:id', validate_token_1.default, controllercliente_1.deleteCliente);
router.post('/', validate_token_1.default, controllercliente_1.postCliente);
router.put('/:id', validate_token_1.default, controllercliente_1.updateCliente);
exports.default = router;
