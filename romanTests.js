"use strict";

var assert = require('assert');
var showRomanNum = require('./Roman.js');

describe("Roman Numeral Tests", function () {
    
    it("check1", function(done) {
        
         var instanceOne = new showRomanNum();
         var result = instanceOne.printMyInput(1);
        
        assert(result == "I", "FAILED");
        done();
    });
   
});