describe ("request to root", function(){
    it ("should return Hello World", function(done) {
        var request = require("request");

        request("http://localhost:8080", function (error, response, body){
            expect(body).toBe(JSON.stringify({'message': 'Hello World!'}));
            done();
        });
    });
});