const mongoose = require('mongoose');
const passportLocalMongoose  = require('passport-local-mongoose');

// schema
// A Mongoose schema defines the structure of the document ,default values
const userScheama = new mongoose.Schema({
    firstName:{
        type:String,
        trim:true,
        required:true
    },
    // lastName:{
    //     type:String,
    //     trim:true,
    //     required:true
    // },
    email:{
        type:String,
        trim:true,
        unique:true, 
        required:true
    },
    profilePic:{
        type:String,
        default:'/images/profilePic.jpeg'
    },
    role:{
        type:String,
        trim:true,
        required:true
    },
    cart:[
        {
            pid:{
                type:String,
                trim:true,
            },

            quantity:{
                type:String,
                trim:true,
            }
        },
    ]

});
userScheama.plugin(passportLocalMongoose); // takes care of undefined schema objects
const User = mongoose.model('User',userScheama);
module.exports = User;

