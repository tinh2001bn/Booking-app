const express = require("express");
const router = express.Router();

const {Register,userLogin} = require('../controller/userController')

router.post("/register",Register );
router.post('/login',userLogin);

module.exports = router;