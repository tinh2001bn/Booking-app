const User = require('../Model/user');
const bcrypt = require('bcryptjs');
const generateToken = require('../until/generateToken');
const jwt = require('jsonwebtoken');
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
      if(user){
          const ismatchpassWord =  bcrypt.compare(user.password, req.body.password);
          if(ismatchpassWord){
             const token = jwt.sign({id: user.id, isAdmin:user.isAdmin}, process.env.JWT_SECRET)
             res.
             cookie("access_token",token,{
              httpOnly: true,
             }).status(200).json(user)
             console.log(req.cookies.access_token)
          }
      }
     } catch (error) {
        res.status(500).json(error);
     }
 }

 //get all user
  const getAllUser = async (req, res)=>{
       try {
         const user= await User.find({});
          res.json(user);
       } catch (error) {
        res.status(500).json(error)
       }
  }
  // update User
  const upDateProfile = async( req, res)=>{
      try {
        const user = await User.findByIdAndUpdate(req.params.id,{
           $set: req.body
        })
        res.status(200).json(user);

      } catch (error) {
        res.status.json(error)
      }
  }

  // deleteUser
   const deleteUser = async(req, res)=>{
    try {
  await User.findByIdAndDelete(req.params.id);
       res.status(200).json("Delete success")
    } catch (error) {
      res.status(500).json(error)
    }
   }
module.exports={Register,userLogin, getAllUser, upDateProfile, deleteUser}