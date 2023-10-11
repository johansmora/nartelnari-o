import {Router} from "express";
import { deleteCliente, getCliente, getClientes, postCliente, updateCliente } from "../controllers/controllercliente";
import validateToken from "./validate-token";




const router= Router();
router.get('/',validateToken,getClientes);
router.get('/:id',validateToken,getCliente);
router.delete('/:id',validateToken,deleteCliente);
router.post('/',validateToken,postCliente,);
router.put('/:id',validateToken,updateCliente);

export default router;