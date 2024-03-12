var express = require("express");
var app = express();
app.get("/", function (request, response) {
    response.send("<h1>Hello, world!</h1><p>La mia applicazione con Express</p>");
});
app.listen(3000, function () {
    console.log("Express app started on port 3000.");
});