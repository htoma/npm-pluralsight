const should = require("should");
const greeter = require("../lib/tscode.js");

describe("Typescript is compiled OK", function() {
    it("when it passed", function() {
        const g = new greeter.Greeter();
        g.greet("Yoda").should.equal("Greetings from the Typescript world Yoda");
    });
});