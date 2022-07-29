const express = require("express");

const app = express();

const middleware1 = (req,res,next)=>{
    console.log('middleware1')

    next();
}


const middleware2 = (req,res,next)=>{
    console.log('middleware2')

    next();
}


app.use(middleware2)

app.get("/page1",middleware1, function(req,res){
    res.send("for page 1 both middleware1 and middleware2 is applied");
})

app.get("/page2",function(req,res){
    res.send("for page 2 only middleware2 is applied");
})

app.get("/page3", function(req,res){
    res.send("for page 3 only middleware2 is applied");
})

app.get("/page4",middleware1, function(req,res){
    res.send("for page 4 both middleware1 and middleware2 is applied");
})

app.get("/page5", function(req,res){
    res.send("for page 5 only middleware2 is applied");
})


app.listen(9090,function(){
    console.log("server is running")
})
