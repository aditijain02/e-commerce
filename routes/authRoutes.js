const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const Order = require('../models/order');
const {isLoggedIn,isAdmin} = require('../middleware');
const flash =  require('connect-flash');
const router = express.Router();

router.get('/',(req,res)=>{
     res.render('login');
});

router.get('/home', isLoggedIn,(req,res)=>{
    res.render('home',{uname:req.user.firstName});
    //  console.log(req.user.username);
});

router.get('/register',(req,res)=>{
    res.render('signup');
})

router.get('/login',(req,res)=>{
    res.render('login');
})

router.post('/register',async (req,res)=>{
    // console.log(req.body);
    try {
        console.log(req.body);
            const user= {
                
                firstName: req.body.firstname,
                //  lastName:req.body.lastname,
                email:req.body.email,
                username:req.body.username, 
                role:req.body.role,
                
            }

                const newUser = await User.register(user,req.body.password);
                const temp =  await Order.create({userid:req.body.username});
                // res.send(newUser);
                res.redirect('/login');
    } catch (error) {
        console.log(error);
        // req.flash('error' , error.message);
    }
    
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/home',                         
    failureRedirect: '/fail' 
}), (req,res)=>{
  // res.render('home');                               
});


router.get('/logout',(req,res)=>{
    req.logout(()=>{
        res.redirect('/');
    });
});

module.exports = router;