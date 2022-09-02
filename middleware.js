const isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        // res.send("Please Login");
        res.render('notfound');
    }
    next();
}

const isAdmin = (req,res,next)=>{
    if(req.user.role !="admin"){
        // res.send("You are not admin");
        res.render('notfound');
    }
    next();
}

module.exports ={isLoggedIn,isAdmin};