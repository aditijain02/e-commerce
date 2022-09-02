const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const {isLoggedIn,isAdmin} = require('../middleware');


router.get('/202' ,(req,res)=>{
   res.send("working");
});

router.get('/orders',isLoggedIn,(req,res)=>{
   res.render('orders');
})

router.get('/products' ,isLoggedIn,async (req,res)=>{
   const products = await Product.find();
   res.json(products);
});

router.get('/product/:id' ,isLoggedIn,async (req,res)=>{
   const productId = req.params.id;
   // const currproduct = await Product.find({"_id" :productId});
   const currproduct = await Product.findOne({_id:productId});
   // console.log(currproduct);
  

   const payload = {
      product:currproduct,
      name:currproduct.productName,
   }

   res.render('productDesc',{payload});
   
});


router.post('/product/review/:id', isLoggedIn,async (req,res)=>{
   const productId = req.params.id;
   console.log(req.body);
   try {
      
      const rev = await Product.updateOne({_id:productId},{
            $push :{
               reviews:{
                  content:req.body.content,
                  postedBy:req.user.username,
                  star:req.body.rating,

               }
            }
      });

      res.redirect(`/product/${productId}`);

   } catch (error) {
      console.log(error);
   }

});

router.get('/product/review/:id',isLoggedIn, async (req,res) =>{
   const productIdd = req.params.id;
   const currproduct = await Product.findOne({_id:productIdd}).populate('reviews');
   res.json(currproduct);
   // console.log(currproduct);
   
});


// _______________________________Category___________________________________________________________________

router.get('/home/:category',isLoggedIn,async(req,res)=>{
   const cat = req.params.category;
   res.render('category',{cat});
});

router.get('/home/category/:category',isLoggedIn, async (req,res)=>{
   const cat = req.params.category;
   const products = await Product.find({category:cat});
   res.json(products);

});



module.exports = router;