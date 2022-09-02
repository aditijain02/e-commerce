const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const User = require('../models/user');
const Order = require('../models/order');
const {isLoggedIn,isAdmin} = require('../middleware');


const PublishableKey = 'pk_test_51LaF5WSAeBTv5HPlXFw5Vwh7OT4vwreYu2P9bUgNJnHv0hXBEa5KNLzhLEmRTw45scOi8BVWzc0cBtNXUhpYqcVW00qAHeQIbV';
const SecretKey = 'sk_test_51LaF5WSAeBTv5HPl0RQ5Nwi7Blj77vFlVUSdUwRSWMyeFAoFeGEKw5RhQ9aMnLJdCLxEafkvtCIcijhKtVLNvobt00Misv845m';

router.get('/cart',isLoggedIn, (req,res)=>{
    res.render('cart',{key:PublishableKey,uid:req.user.username});
});

router.get('/addtocart/:id',isLoggedIn,async (req,res)=>{

    const productId = req.params.id;
    // console.log(productId);
    try {
      
        const addcart = await User.updateOne({_id:req.user._id},{
              $push :{
                cart:{
                    pid:productId,
                 }
              }
        });

        // console.log(addcart);
        res.redirect(`/product/${productId}`);
  
        
  
     } catch (error) {
        console.log(error);
     }
});

router.get('/getcart',isLoggedIn, async (req,res)=>{
   const u = await User.findOne({_id:req.user._id}).populate('cart');
   res.json(u);
});

router.get('/getorders',isLoggedIn,async (req,res)=>{
    const orders = await Order.find({userid:req.user.username}).populate('productid');
    res.json(orders);
});



router.get('/getproductdetail/:id', isLoggedIn,async (req,res)=>{
    const productId = req.params.id;

    const product = await Product.find({_id:productId});
    res.json(product);

});



// router.post('/addorder',(req,res)=>{
//     console.log(req.user._id);
//   })


module.exports = router;