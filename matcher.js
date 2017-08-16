// Refactoring Workbook (01-02-03)
// Copyright 2001-2, William C. Wake. All Rights Reserved.
// Original in Java

var Matcher = (function() {
    function Matcher() {}
    Matcher.prototype.match = function(expected, actual, clipLimit, delta) {
        var returnVariable;
        // Clip "too-large" values
        Matcher.prototype.clip(actual, clipLimit);
        
        // Check for length differences
        returnVariable = Matcher.prototype.checkLength(actual, expected);
        if (returnVariable ==false)
            return false;
            
        // Check that each entry within expected +/- delta
        returnVariable = Matcher.prototype.checkDelta(actual, expected, delta);
        return returnVariable;
    };

    Matcher.prototype.clip = function(actual, clipLimit) {
        // Clip "too-large" values
        for (var i = 0; i < actual.length; i++)
        {
            if (actual[i] > clipLimit)
                actual[i] = clipLimit;
        }

    };

    Matcher.prototype.checkLength = function(actual, expected) {
        // Check for length differences
        if (actual.length !== expected.length)
            return false;
        else
            return true;
    };
    
    Matcher.prototype.checkDelta = function(actual, expected, delta) {
        // Check for delta 
        for (var i = 0; i < actual.length; i++)
        {
            if (Math.abs(expected[i] - actual[i]) > delta)
            {
                return false;
            }
        }
        return true;
    };

    return Matcher;
}());
module.exports = Matcher;
