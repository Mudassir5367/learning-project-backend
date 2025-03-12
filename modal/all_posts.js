const mongoose = require('mongoose')

const allPosts = new mongoose.Schema({
    body:{
        type:String,
        required: true,
    },
    id:{
        type:Number,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true, // Ensures every post has a userId
    },
    title:{
    type:String,
    },
    createdAt:{
    type: Date,
    default: Date.now 
    }
})

module.exports = mongoose.model('all-posts', allPosts)