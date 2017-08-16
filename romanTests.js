"use strict";

var assert = require('assert');
var showRomanNum = require('./Roman.js');
var Logger = require('./logger');

describe("Roman Numeral Tests", function () {
    var logger;
    
    beforeEach(function (done) {
       logger = new Logger();
       done(); 
    });
    
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
    
   it("check99", function(done) {
        checkVal("XCIX", 99);
        done();
    })

   it("check289", function(done) {
       
        checkVal("CCLXXXIX", 289);
        done();
    })
    
       it("check922", function(done) {
       
        checkVal("CMXXII", 922);
        done();
    })
  
   it("check2789", function(done) {
        checkVal("MMDCCLXXXIX", 2789);
        done();
    })
    
   it("check9000", function(done) {
        checkVal("M_X", 9000);
        done();
    })
  
   it("check8888", function(done) {
        checkVal("_VMMMDCCCLXXXVIII", 8888);
        done();
    })
    
  	it("logger write dummy", 
		function(done) {
			//var f = new Logger();
			//dummy setup
			logger.Write = function() {
				// actually do nothing here.  
				// C will call B, and b will do nothing.  
				// Success...allows c to run independently.
			};
			//actual test
			//assert.equal(f.c(), 1, "Expecting one");
			checkVal("_VMMMDCCCLXXXVIII", 8888);
			//f.Write("x");
			done();
		}
	)
	
   	it("logger write fake", 
		function(done) {
			//var f = new Logger();
			//dummy setup
			var x = "laurie";
			logger.Write = function() {
				return x;
			};
			//actual test
			//assert.equal(f.c(), 1, "Expecting one");
			logger.Write("xx");
			//checkVal("_VMMMDCCCLXXXVIII", 8888);
			done();
		}
	);
	
     function checkVal(expected, input) {
        var instanceOne = new showRomanNum(logger);
        var result = instanceOne.printMyInput(input);
        assert(expected === result, "Input: " + input + " Failed, result was " + result);
    }
});