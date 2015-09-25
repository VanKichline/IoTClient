// For the BeagleBone Black Rev. C and Raspberry Pi 2 w/ AdaFruit Node install

var signalR    = require('signalr-client');
var client     = new signalR.client("http://kichline-iothub.azurewebsites.net/signalR", ['IoTHub']);
var clientName = "bb1.kichline.com";

client.handlers.iothub = { 
    // method name must be all lower case
    // function signature should match call from hub
    queryUptime: function() {
        console.log("revc => queryUptime");
        uptimeResponse();
    }
};

function uptimeResponse() {
    console.log("Sending initial message");
    client.invoke(
        'ChatHub',      // Hub Name (case insensitive)
        uptimeResponse, // Method Name (case insensitive)
        clientName, 100 //additional parameters to match called signature
        );
}

setTimeout(uptimeResponse, 1000);


