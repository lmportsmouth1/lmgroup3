function Roman() {
   
}

Roman.prototype.printMyInput = function (input) {
   var str = input.toString();
   var pad = "0000";
   var ans = pad.substring(0,pad.length - str.length) + str;
   var d4 = Roman.prototype.transform(ans.charAt(0),"M","_V","_X");
   var d3 = Roman.prototype.transform(ans.charAt(1),"C","D","M");
   var d2 = Roman.prototype.transform(ans.charAt(2),"X","L","C");
   var d1 = Roman.prototype.transform(ans.charAt(3),"I","V","X");
   return d4 + d3 + d2 + d1;
 
}
 
Roman.prototype.transform = function (input,p1,p2,p3) { 
 
 if (input == 0) {
    return ""
 }
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