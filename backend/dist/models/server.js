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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routescliente_1 = __importDefault(require("../routes/routescliente"));
const routesuser_1 = __importDefault(require("../routes/routesuser"));
const modelsclientes_1 = require("./modelsclientes");
const modelsuser_1 = require("./modelsuser");
const modelspagos_1 = require("./modelspagos");
const modelsservicios_1 = require("./modelsservicios");
const modelsestadopago_1 = require("./modelsestadopago");
const modelsfacturas_1 = require("./modelsfacturas");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto ' + this.port);
        });
    }
    routes() {
        this.app.use('/api/clientes', routescliente_1.default);
        this.app.use('/api/users', routesuser_1.default);
    }
    midlewares() {
        //pase body
        this.app.use(express_1.default.json());
        //cors
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield modelsclientes_1.Cliente.sync();
                yield modelsestadopago_1.EstadoPago.sync();
                yield modelspagos_1.Pagos.sync();
                yield modelsfacturas_1.Factura.sync();
                yield modelsservicios_1.Servicios.sync();
                yield modelsuser_1.User.sync();
            }
            catch (error) {
                console.error('Unable to connect to database', error);
            }
        });
    }
}
exports.default = Server;
