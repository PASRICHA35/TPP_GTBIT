module.exports.myVar = 10
module.exports.happyFunction = function () {
    console.log("Say Cheese:)");
}
function secretfn() {
    console.log("I don't want to be shared");
}
secretfn();
module.exports.happyFunction = function () {
    console.log("I am happier");
}
// module.exports.happyFunction();
// asjfb,asnb,asbj
// fxn call => 
