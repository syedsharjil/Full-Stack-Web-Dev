console.log("hello");
var exp = require("express");
var app = exp();

app.get("/",function(req,res)
{
    res.send("hi there");
})
app.get("/bye",function(req,res)
{
    res.send("bye bye");
})
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started");
})