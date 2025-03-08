const mongoose = require('mongoose')

const allPosts = new mongoose.Schema({
    body:{
        type:String,
        unique: true, 
        required: true 
    },
    id:{
        type:Number
    },
    userId:{
        type:Number
    },
    title:{
        type:String
    }
})

module.exports = mongoose.model('all-posts', allPosts)