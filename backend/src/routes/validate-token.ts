import { Request,Response,NextFunction } from "express";
import  jwt  from "jsonwebtoken";

const validateToken=(req:Request,res:Response,next:NextFunction)=>{
    
    const headerToken=req.headers['authorization']

    if(headerToken!=undefined&&headerToken.startsWith('Bearer ')){
        //tiene token
        try {
            const bearerToken=headerToken.slice(7);
            jwt.verify(bearerToken,process.env.SECRET_KEY||'estoesunacontreseñadiferente');
            next()
        } catch (error) {
            res.status(401).json({
                msg:"el token no es valido",
                error
            })
        }
        
}else{
    res.status(401).json({
        msg:"Acceso denegado"
    })
}

}

export default validateToken;