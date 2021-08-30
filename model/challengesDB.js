const mongoose = require('mongoose')

const challengesDBSchema= new mongoose.Schema({
    name:{
        type: String,
        //required: true 
    }, 
    code:{
        type: String,
       //required: true 
    }, 
    house:{
        type: String,
        //required: true 
    }, 
    grade:{
        type: String,
        //required: true 
    }, 
    password:{
        type: String,
        //required: true 
    }, 
    completed:{
        type: Number,
        required: true 
    }
})

module.exports=mongoose.model('Challenge', challengesDBSchema)