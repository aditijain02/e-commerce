const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const orderSchema =new mongoose.Schema({

    userid:{
        type:String,
        trim:true,
    },
    productid:[
       {
         type:String,
         trim:true,
       }
    ],

});

const Order = mongoose.model('Order',orderSchema);
module.exports = Order;