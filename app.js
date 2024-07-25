const express = require("express");
const app = express();
const ExpressError = require("./ExpressError/")
const checkToken = (req,res,next)=>{
    let {token} = req.query;
    if(token==="giveaccess"){
        next();
    }
    throw new ExpressError(401,"Access Denied!");
};


app.get("/api",checkToken,(req,res)=>{
   res.send("data"); 
});




app.get("/",(req,res)=>{
    res.send("Hi i am a root");
});

app.get("/random",(req,res)=>{
    res.send("this is a random page");
});

app.get("/err",(req,res)=>{
    abcd = abcd;
});


app.use((err,req,res,next)=>{
    console.log("--------ERROR--------");
    next(err);
});

app.use((err,req,res,next)=>{
    console.log("--------ERROR2--------");
    next(err);
});

app.listen(8080,()=>{
    console.log("server is listening to port 8080");
});


