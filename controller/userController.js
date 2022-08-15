const User = require('../Model/user');
const bcrypt = require('bcryptjs')
const Register = async( req, res)=>{
    const user = new User(req.body);
      try {
         const saveUser = await user.save();
           res.status(200).json(saveUser);
      } catch (error) {
        res.status(500).json(error);
      }
}

// Login
 const userLogin = async(req, res)=>{
     try {
        const user = await User.findOne({username: req.body.username});
       const mathPassWord = await bcrypt.compare(req.body.password, user.password);
     if(mathPassWord){
         res.status(200).json(user);
     }
     } catch (error) {
        res.status(500).json(error);
     }
 }
module.exports={Register,userLogin}