const Hotel = require('../Model/hotels')

//  Thêm khách sạn
const createHotel = async( req, res)=>{
    const newhotel = new Hotel( req.body)
     try {
         const saveHotel = await newhotel.save();
         res.status(200).json(saveHotel);
     } catch (error) {
         res.status(500).json(error);
     }

}

// update hotel

 const updateHotel = async(req, res)=>{
 
       try {
         const hotel = await Hotel.findByIdAndUpdate(req.params.id,{
            $set: req.body
         })
      
           res.status(200).json(hotel);
       
       } catch (error) {
        res.status(500).json(error)
       }
 }
// delete hotel
 const deletehotel = async( req, res)=>{
      try {
         await Hotel.findByIdAndDelete(req.params.id);
          res.status(200).json('Hotel delete successful')
      } catch (error) {
        res.status(500).json(error)
      }
 }

 // get all hotel
 const getAllHotel = async( req, res)=>{
      try {
        const hotel = await Hotel.find({});
         res.status(500).json(hotel)
      } catch (error) {
        res.status(500).json(error)
      }
 }
module.exports = {createHotel,updateHotel,deletehotel,getAllHotel}