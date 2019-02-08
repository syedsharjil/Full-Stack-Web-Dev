var express = require("express");
var app = express();
var request = require("request");
app.get("/search",function(req,res){
    request("http://www.omdbapi.com/?i=tt3896198&apikey=c1cb8b0c&s=California",function(error,response,body){
        if(!error&&response.statusCode==200)
        {
            res.send(body);
        }
    })
res.send("this is the search page");
});
app.listen(process.env.PORT,process.env.IP,function()
{
    console.log("now serving your page");
});