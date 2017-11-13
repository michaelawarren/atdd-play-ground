describe ("request to root", function(){
    it ("should return Hello World", function() {
        var request = require("request");
        var message = "fail";
        request.get("http://localhost:8080")., function (error, response, body){
            message = body;
        });
        console.log(message)
    });
});