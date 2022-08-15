const mongoose = require('mongoose');


  const ConnectDb = async ()=>{
    try {
        await mongoose.connect(process.env.Mongo, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });  
        console.log("MongoDB connection SUCCESS");
    } catch (error) {
        console.error("MongoDB connection FAIL");
        process.exit(1);
    }
  }
  module.exports= ConnectDb;