const jwt = require('jsonwebtoken');

/**
 * VERIFICAR TOKEN
 */
let verificaToken = (req, res, next) =>{

    let token = req.get('token'); 

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if(err){
            return res.status(401).json({
                err:{
                    message: 'Token no valido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
    })

}

let verificaAdmin_Role = (req,res,next) => {

    let usuario = req.usuario;

    if(usuario.role != 'ADMIN_ROLE'){
        res.json({
            ok:false,
            err:{
                message: 'El usuario no es administrador'
            }
        })
    }
    next();

}

module.exports = {
    verificaToken,
    verificaAdmin_Role
}