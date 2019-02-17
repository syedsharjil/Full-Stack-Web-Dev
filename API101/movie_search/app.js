var express = require("express");
var app = express();
var request = require("request");
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("search");
    });
app.get("/results",function(req,res){
    var query=req.query.search_movie;
    request("http://www.omdbapi.com/?i=tt3896198&apikey=c1cb8b0c&s="+query,function(error,response,body){
        if(!error && response.statusCode == 200)
        {
            var data=JSON.parse(body);
            res.render("results",{data:data});
             
        }
    });
});
app.listen(process.env.PORT,process.env.IP,function()
{
    console.log("now serving your page");
});
