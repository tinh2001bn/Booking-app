const express = require("express");
const router = express.Router();

const {createHotel,updateHotel,deletehotel,getAllHotel} = require('../controller/hotelcontroller')

router.delete('/:id',deletehotel)
router.put('/:id',updateHotel)
router.post("/",createHotel );
router.get('/',getAllHotel)
module.exports = router;