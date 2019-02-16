var express = require("express");
var app = express();
var request = require("request");
app.set("view engine","ejs")
app.get("/search",function(req,res){
    request("http://www.omdbapi.com/?i=tt3896198&apikey=c1cb8b0c&t=frozen",function(error,response,body){
        if(!error && response.statusCode == 200)
        {
            var results=JSON.parse(body);
            res.send(results);
        }
    });
});
app.listen(process.env.PORT,process.env.IP,function()
{
    console.log("now serving your page");
});