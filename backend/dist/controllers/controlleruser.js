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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const modelsuser_1 = require("../models/modelsuser");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Usuario, Contraseña } = req.body;
    //validamos si el usuario ya existe
    const user = yield modelsuser_1.User.findOne({ where: { Usuario: Usuario } });
    if (user) {
        return res.status(400).json({
            msg: "ya existe un usuario con el nombre " + Usuario
        });
    }
    const hashedContraseña = yield bcrypt_1.default.hash(Contraseña, 10);
    try {
        //guardamos usuario
        yield modelsuser_1.User.create({
            Usuario: Usuario,
            Contraseña: hashedContraseña
        });
        res.json({
            msg: `Usuario ${Usuario} creado exitosamente!`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "upsss ocurrio un error ",
            error
        });
    }
});
exports.newUser = newUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Usuario, Contraseña } = req.body;
    //validamos si el usuario existe en la bd
    const user = yield modelsuser_1.User.findOne({ where: { Usuario: Usuario } });
    if (!user) {
        return res.status(400).json({
            msg: `No existe un usuario con el nombre ${Usuario} en la base datos`
        });
    }
    //validamos password
    const ContraseñaValid = yield bcrypt_1.default.compare(Contraseña, user.Contraseña);
    if (!ContraseñaValid) {
        return res.status(400).json({
            msg: "la contraseña ingresada es incorrecta"
        });
    }
    //generamos token
    const token = jsonwebtoken_1.default.sign({
        Usuario: Usuario
    }, process.env.SECRET_KEY || 'estoesunacontreseñadiferente');
    res.json(token);
});
exports.loginUser = loginUser;
