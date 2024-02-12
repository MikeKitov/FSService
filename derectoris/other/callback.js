function callbackFunction(callback) {
    setTimeout(() => {
        callback("Callback");
    }, 2000);
}

function callbackFunction2(callback) {
    setTimeout(() => {
        callback("Callback&&rock");
    }, 1000);
}
  
function CallbackResult(result) {
    console.log(result);
}
  
callbackFunction2(CallbackResult);
callbackFunction(CallbackResult);