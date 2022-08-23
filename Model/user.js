const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
  const userSchema = mongoose.Schema({
      
    username:{
         type: String,
         required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    country:{
       type: String,
       required: true
    },
    img:{
         type:String,
    },
    city:{
         type: String,
         required: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false,
    }
       
  },{
    timestamps: true
  })


    //login
  userSchema.methods.matchpassWord = async(enterPassword)=>{
      return  await bcrypt.compare(this.password,enterPassword )
  }


    // Register
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });

  const users = mongoose.model('user', userSchema);
   module.exports= users;