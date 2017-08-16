function Logger() {
}

Logger.prototype.Write = function (toBeOutput) {
    console.log(toBeOutput);
 
};

module.exports = Logger;