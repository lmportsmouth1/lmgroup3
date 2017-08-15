"use strict";

var assert = require('assert');
var showRomanNum = require('./Roman.js');

describe("Roman Numeral Tests", function () {
    
    it("check1", function(done) {
        checkVal("I", 1);
        done();
    });

    it("check2", function(done) {
        checkVal("II", 2);
        done();
    });
    
     function checkVal(expected, input) {
        var instanceOne = new showRomanNum();
        var result = instanceOne.printMyInput(input);
        assert(expected === result, "Input: " + input + " Failed, result was " + result);
    }
});