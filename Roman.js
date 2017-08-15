function Roman() {
   
}

Roman.prototype.printMyInput = function (input) {
 
 var p1 = "I";
 var p2 = "V";
 var p3 = "X";
 
 if (input == 1) {
     return p1;
 }
 else if (input == 2) {
     return(p1 + p1);
 }
 else if (input == 3) {
     return (p1+p1+p1);
 }
 else if (input == 4) {
     return p1+p2;
 }
 else if (input == 5) {
     return p2;
 }
 else if (input == 6) {
     return p2+p1;
 }
 else if (input == 7) {
     return p2+p1+p1;
 }
 else if (input == 8) {
     return p2+p1+p1+p1;
 }
 else if (input == 9) {
     return p1+p3;
 }
 
 
 
 return input.toString();
 
}



module.exports = Roman;