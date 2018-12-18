"use strict";
/*jslint node: true */
exports.__esModule = true;
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function (name) {
        return "Greetings from the Typescript world " + name;
    };
    return Greeter;
}());
exports.Greeter = Greeter;
