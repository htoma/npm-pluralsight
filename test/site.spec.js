var app = require("../");
var request = require("supertest").agent(app.listen());

describe("our amazing test", function(){
    it("has a nice welcome message", function(done){
        request
            .get("/")
            .expect("koa says hi")
            .end(done)
    });
});