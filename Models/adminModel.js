const mongoose =  require('mongoose')

const adminSchema = new mongoose.Schema({

    wallid:{
        type:String,
        required:true
    },

    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    price:{
        type:String,
        required:true
    },

    images:{
        type:String,
        required:true
    }
})

const admindatas = mongoose.model("admindatas",adminSchema) 
module.exports = admindatas



