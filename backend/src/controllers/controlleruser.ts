import { Request,Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/modelsuser";
import jwt from "jsonwebtoken"
export const newUser=async(req:Request,res:Response)=>{

    const {Usuario,Contraseña}=req.body;

    //validamos si el usuario ya existe
    const user=await User.findOne({  where:{  Usuario:Usuario   }  });
    if(user){
        return res.status(400).json({
            msg:"ya existe un usuario con el nombre "+Usuario
        })
    }
    const hashedContraseña= await bcrypt.hash(Contraseña,10);
    try {
        //guardamos usuario
        await User.create({
            Usuario:Usuario,
            Contraseña:hashedContraseña 
        })
        res.json({
            msg:`Usuario ${Usuario} creado exitosamente!`
        })
    } catch (error) {
        res.status(400).json({
            msg:"upsss ocurrio un error ",
            error
        })
    }
    

}
export const loginUser=async(req:Request,res:Response)=>{

    const {Usuario,Contraseña}=req.body;

        //validamos si el usuario existe en la bd
        const user:any=await User.findOne({  where:{  Usuario:Usuario   }  });
        if(!user){
            return res.status(400).json({
                msg:`No existe un usuario con el nombre ${Usuario} en la base datos`
            })
        }

        //validamos password
            const ContraseñaValid=await bcrypt.compare(Contraseña,user.Contraseña)
            if(!ContraseñaValid){
                return res.status(400).json({
                    msg: "la contraseña ingresada es incorrecta"
                })
            }
        //generamos token
            const token=jwt.sign({
                Usuario:Usuario
            },process.env.SECRET_KEY||'estoesunacontreseñadiferente');

            res.json(token)
}