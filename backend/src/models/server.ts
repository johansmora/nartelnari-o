import express,{Application} from 'express';
import cors from "cors";
import routesCliente from "../routes/routescliente";
import  routesUser  from "../routes/routesuser";
import { Cliente } from './modelsclientes';
import { User } from './modelsuser';
import  {Pagos}  from './modelspagos';
import { Servicios } from './modelsservicios';
import { EstadoPago } from './modelsestadopago';
import { Factura } from './modelsfacturas';
class Server {
    private app:Application;
    private port:string;
    constructor(){
        this.app= express();
        this.port= process.env.PORT ||'3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('Aplicacion corriendo en el puerto '+ this.port);
        })
    }

    routes(){
        this.app.use('/api/clientes',routesCliente);
        this.app.use('/api/users',routesUser);
    }
    midlewares(){
        //pase body
        this.app.use(express.json());
        //cors
        this.app.use(cors());
    }
    async dbConnect(){
        try {
            await Cliente.sync();
            await EstadoPago.sync();
            await Pagos.sync();
            await Factura.sync();
            await Servicios.sync();
            await User.sync();
        } catch (error) {
            console.error('Unable to connect to database',error)
        }
    }

}
export default Server;

