var express = require("express");
var app = express();
var request = require("request");
app.set("view engine","ejs");

app.get("/results",function(req,res){
    request("http://www.omdbapi.com/?i=tt3896198&apikey=c1cb8b0c&s=california",function(error,response,body){
        if(!error && response.statusCode == 200)
        {
            var data=JSON.parse(body);          //converting into json object
            res.render("results",{data:data}); //sending json object to EJS file to display the list
             
        }
    });
});
app.listen(process.env.PORT,process.env.IP,function()
{
    console.log("now serving your page");
});