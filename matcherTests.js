/*jslint node: true */
/*jslint newcap: true */
/*global before, beforeEach, afterEach, after, describe, it */
/*jslint nomen: true */
"use strict";

var assert = require('assert'); 
var Matcher = require('./matcher');

// the original from the Refactoring Workbook has many asserts within the same test fixture function.  I've modified to single asserts.
// this is helps to understand exactly what the code is doing, it wasn't obvious and took some reasoning in and out and between the java samples
// I think J Brains and others think in this example SUVT as explained by Meszaros is too much effort and a lot of the code in-lineable.  A style choice?
   
describe("Matcher Tests", function () {
    //1. Module Setup
    var matcher,
		clipLimit = 100,
		delta = 5,
		expectedToMatchTo = [10, 50, 30, 98];
		
    beforeEach(function () {
        matcher = new Matcher(); 
    });

    //2. Module Exercise

    it('Will match when array items are within delta and clip limit', function (done) {
        // 1. Setup
		var valuesToTryWith = [12, 55, 25, 110];
      
        // 2. Exercise
		var doTheyMatch = matcher.match(expectedToMatchTo, valuesToTryWith, clipLimit, delta);
		
        // 3. Verify
        assert(doTheyMatch, 'The values within the arrays need to match withing the delta between values and less than the clip limit');
        
        done();
    });

    it('Will not match because the second array items differ by too much, outside the delta', function (done) {
        // 1. Setup
		var valuesToTryWith = [10, 60, 30, 9];
      
        // 2. Exercise
		var doTheyMatch = matcher.match(expectedToMatchTo, valuesToTryWith, clipLimit, delta);

        // 3. Verify
        assert(!doTheyMatch, 'The second array value exceeds delta. Expected to have picked this up.');
        
        done();
    });
    
    it('When array sizes are different, they will not match', function (done) {
        // 1. Setup
		var valuesToTryWith = [10, 50, 30];
      
        // 2. Exercise
		var doTheyMatch = matcher.match(expectedToMatchTo, valuesToTryWith, clipLimit, delta);

        // 3. Verify
        assert(!doTheyMatch, 'Expected to fail with differing array sizes');

        done();
    });
    
    //3. Module Verify

    //4. Module Cleanup
    afterEach(function () {
    });

});