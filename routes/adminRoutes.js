const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const User = require('../models/user');
const {isLoggedIn,isAdmin} = require('../middleware');

router.get('/admin', isAdmin , isLoggedIn ,(req,res)=>{
    res.render('adminHome');
}); 

router.get('/admin/products', isAdmin , isLoggedIn ,(req,res)=>{
    res.render('adminProducts')
});

router.get('/admin/products/addProduct', isAdmin , isLoggedIn ,(req,res)=>{
    res.render('adminAddProduct');
});

router.post('/admin/products/addProduct', isAdmin , isLoggedIn , async (req,res)=>{
    // console.log(req.body);

    try {

        const product = {
            productName : req.body.name,
            price: req.body.price,
            img: req.body.img,
            desc: req.body.desc,
            category:req.body.category,
        }

        const newProduct = await Product.create(product);
        // res.send(newProduct);
        res.redirect('/admin/products');
        
    } catch (error) {
        console.log(error);
    }
});

//___________________________________________Admin__Product___Page_________________________________________________


     router.get('/product/del/:id',isAdmin , isLoggedIn ,async(req,res)=>{
        const id = req.params.id;
        await Product.remove({_id:id});
        res.redirect('/admin/products');
     });

     router.get('/product/edit/:id',isAdmin , isLoggedIn ,async(req,res)=>{
        const id = req.params.id;
        res.render('adminEdit',{id});
     });


     router.get('/detail/:id',isAdmin , isLoggedIn ,async(req,res)=>{
        const id = req.params.id;
       const product = await Product.findById(id);
       res.json(product);
     });


     router.post('/product/edit/:id',isAdmin , isLoggedIn ,async(req,res)=>{
        const productId = req.params.id;
        // console.log(req.body.price);
        // res.render('adminEdit',{id});
        console.log(productId);
        const rev = await Product.updateOne({_id:productId},{
            $set:{
                productName:req.body.name,
                price:req.body.price,
                img:req.body.img,
                desc:req.body.desc,
                category:req.body.category,
            }
           
      });
      res.redirect('/admin/products');
      
     });

    // __________________________Admin Delete Users_____Show Users__________________________________________________
    
    router.get('/admin/users',isAdmin , isLoggedIn , (req,res)=>{
        res.render('allusers');
    });

    router.get('/admin/getusers',isAdmin , isLoggedIn ,async (req,res)=>{

        const users = await User.find();
        res.json(users);

    });


    router.get('/admin/removeuser/:id' ,isAdmin , isLoggedIn , async(req,res)=>{
        const id = req.params.id;
        await User.remove({_id:id});
        res.redirect('/admin/users');
    });



module.exports = router;