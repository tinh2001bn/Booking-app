const express = require("express");
const router = express.Router();

const {Register,userLogin, getAllUser,upDateProfile,deleteUser} = require('../controller/userController')
const {verifyToken,Admin}= require('../Middleware/auth')
router.post("/register",Register );
router.post('/login',userLogin);
router.put('/:id',Admin,upDateProfile)
router.delete('/:id',verifyToken,deleteUser) 
router.get('/', getAllUser);
module.exports = router;