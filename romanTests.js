"use strict";

var assert = require('assert');
var showRomanNum = require('./Roman.js');

describe("Roman Numeral Tests", function () {
    
    it("check1", function(done) {
        checkVal("I", 1);
        checkVal("II", 2);
        checkVal("III", 3);
        checkVal("IV", 4);
        checkVal("V", 5);
        checkVal("VI", 6);
        checkVal("VII", 7);
        checkVal("VIII", 8);
        checkVal("IX", 9);
        done();
    });
    
    it("check49", function(done) {
        checkVal("XLIX", 49);
        done();
    })

  
    
   
    
     function checkVal(expected, input) {
        var instanceOne = new showRomanNum();
        var result = instanceOne.printMyInput(input);
        assert(expected === result, "Input: " + input + " Failed, result was " + result);
    }
});