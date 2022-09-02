const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const productSchema =new mongoose.Schema({

    productName:{
        type:String,
        trim:true,
        required:true
    },
    price:{
        type:String,
        trim:true,
        required:true
    },
    img:{
        type:String,
        trim:true,
    },
    desc:{
        type:String,
        trim:true,
        required:true
    },
    category:{
        type:String,
        trim:true,
        required:true
    },
    reviews:[
        {
            content:{
                type:String,
                trim:true,
            },

            star:{
                type:String,
                trim:true,
            },

            postedBy:{
                type:String,
                trim:true,
            }
        },
    ]

});

const Product = mongoose.model('Product',productSchema);
module.exports = Product;