function Roman() {
   
}

Roman.prototype.printMyInput = function (input) {
 if (input == 1) {
     return "I";
 }
 if (input == 2) {
     return "II";
 }
    // return input.toString();
}

module.exports = Roman;