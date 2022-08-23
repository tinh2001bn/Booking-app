const  express = require('express');
const router = express.Router();
const{ createRoom, updateRoom, deleteRoom,getAllRoom} = require('../controller/roomController')

 router.post('/:hotelId',createRoom)
 router.put('/:id', updateRoom)
 router.delete('/:id/:hotelId', deleteRoom)
 router.get('/', getAllRoom)
  module.exports = router;