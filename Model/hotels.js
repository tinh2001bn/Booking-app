const mongoose = require('mongoose');

  const hotelSchema = mongoose.Schema({
      
    name:{
         type: String,
         required: true
    },
    type:{
        type: String,
        required: true,
    },
    adress:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true
    },
    distance:{
         type: String,
         required: true
    },
    photos:{
        type: [String],

    },
    title:{
        type:String,
        required: true
    },
    desc:{
        type: String,
        required: true
   },
    room:{
        type:[String],
    },
   rating:{
     type: Number,
     min:0,
     max:5
   },

   cheapestPrice: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  },{
    timestamps: true
  })

  const hotels = mongoose.model('Hotel', hotelSchema);

  
   module.exports= hotels;