const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        require:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    // phone:{
    //     type:Number,
    //     required:true,
    //     unique:true,
    // },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    // confirmPassword:{
    //     type:String,
    //     required:true,
    // }
})

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
      this.password = await bcrypt.hash(this.password, 12);
    }
    next()
  })

module.exports = mongoose.model('User',userSchema);