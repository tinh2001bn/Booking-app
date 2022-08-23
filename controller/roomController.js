const Room = require('../Model/rooms')
const Hotel = require('../Model/hotels')

// Create Room
const createRoom = async(req, res,next)=>{
const hotelId = req.params.hotelId;
const newRoom = new Room( req.body);
 try {
    const saveRoom = await newRoom.save();
  try {
    await Hotel.findByIdAndUpdate(hotelId, {
        $push:{room : saveRoom._id}
    })
  } catch (error) {
    next(error)
  }
  res.json(saveRoom);
 } catch (error) {
    next(error)
 }
}

//update Room
const updateRoom = async( req, res)=>{
    
      try {
      const updateroom = await Room.findByIdAndUpdate(
        req.params.id, 
        {
           $set: req.body
        },
        {new: true}
      );
        res.json(updateroom);
      } catch (error) {
        next(error)
      }
}

// delete Room
  const deleteRoom = async( req, res)=>{
    const hotelId = req.params.hotelId;
       try {
        await  Room.findByIdAndDelete( req.params.id);
        await Hotel.findByIdAndUpdate(hotelId, {
          $pull:{ room: req.params.id}
        })
        res.json("Room has been deleted")
       } catch (error) {
        
       }
  }

  // getAllRoom
  const getAllRoom = async( req, res)=>{
      try {
        const getRoom = await Room.find({});
         res.status(200).json(getRoom);
      } catch (error) {
         res.status(500).json(error)
      }
  }
module.exports = {createRoom, updateRoom, deleteRoom, getAllRoom}