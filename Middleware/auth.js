const jwt = require('jsonwebtoken');
const User = require('../Model/user')
const verifyToken =async( req, res, next)=>{

    let token=req.cookies.access_token;
     if(!token){
       return next(createError(401, "you are not authenticate"));
     }
     jwt.verify(token,process.env.JWT_SECRET,(err, user)=>{
         if(err)  return next(createError(403, "Token is valid"));
          req.user = user;
           next();
     })
}

const Admin = async( req, res,next)=>{

  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
}

module.exports= {verifyToken,Admin};