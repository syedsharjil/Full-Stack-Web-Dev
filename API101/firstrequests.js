var request = require("request");
request('http://www.google.com', function (error, response, body) {
if(error)
{
  console.log("something went wrong");  
}
else
{
    if(response.statusCode==200)
    {
        console.log("things are okay");
        console.log(body);
    }
}
});