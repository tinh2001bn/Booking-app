const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
  const roomSchema = mongoose.Schema({
      
    title:{
         type: String,
         required: true
    },
    price:{
        type: Number,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    maxPeople:{
       type: Number,
       required: true
    },
    img:{
         type:String,
    },
    roomNumber:[{number: Number,
        unavailable:[{type: Date}]
               }
          ]
       
  },{
    timestamps: true
  })


  const rooms = mongoose.model('room', roomSchema);


   module.exports= rooms;