import {Request,Response} from'express'
import { Cliente } from '../models/modelsclientes'


export const getClientes=async(req:Request,res:Response)=>{
    const listClientes=await Cliente.findAll();
    res.json(listClientes)
}
export const getCliente=async(req:Request,res:Response)=>{
    const { id } =req.params;
    const cliente= await Cliente.findByPk(id);
    if(cliente){
        res.json(cliente)
    }else{
        res.status(404).json({
            msg: `No existe un Usuario con el id ${id}`
        })
    }
}
export const deleteCliente=async(req:Request,res:Response)=>{
    const { id } =req.params;
    const cliente= await Cliente.findByPk(id);
if(!cliente){
    res.status(404).json({
        msg:`No existe un Usuario con el id ${id}`
    })
}else{
    await cliente.destroy();
    res.json({
        msg: "El usuario fue eliminado con Exito"
    })
}
}
export const postCliente=async(req:Request,res:Response)=>{
    const { body } =req;
    const {Cedula}=req.body;
    const cliente=await Cliente.findOne({  where:{  Cedula:Cedula   }  });
    if(cliente){
        return res.status(400).json({
            msg:"Ya existe un usuario con ese numero de cedula "+Cedula
        });
    }
    try {
        await Cliente.create(body);
    res.json({
        msg:"El usuario fue agregado con exito!"
    })
    } catch (error) {
        res.json({
            msg:"Upss ocurrio un error comuniquese con el administrador",
            error
        })
    }
    
}
export const updateCliente=async(req:Request,res:Response)=>{
    const { body } =req;
    const { id } =req.params;


        try {
            const cliente= await Cliente.findByPk(id);
            if(cliente){
                await cliente.update(body);
                res.json({
                    msg:"El Usuario fue actualizado con exito"
                })
            }else{
                res.status(404).json({
                    msg:`No existe un Usuario con el id ${id}`
                })
            }
        } catch (error) {
            res.json({
                msg:"Upss ocurrio un error comuniquese con el administrador",
                error
            });
        }

}