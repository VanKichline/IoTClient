// For the BeagleBone Black Rev. C and Raspberry Pi 2 w/ AdaFruit Node install

var signalR    = require('signalr-client');
var wiring     = require('wiring-pi');
var client     = new signalR.client("http://kichline-iothub.azurewebsites.net/signalR", ['IoTHub']);
var clientName = "rpi3.kichline.com";

client.handlers.iothub = { 
    // method name must be all lower case
    // function signature should match call from hub
    set_rgb: function(r, g, b) {
        console.log("revc => set_rgb(" + r + "'" + g + "'" + b + ")");
        setRGB(r, g, b);
        rgbResponse();
    }
};

function setRGB(r, g, b) {
    // TODO
}

function rgbResponse() {
    console.log("Sending initial message");
    client.invoke(
        'ChatHub',      // Hub Name (case insensitive)
        rgbResponse,    // Method Name (case insensitive)
        clientName, 100 //additional parameters to match called signature
        );
}

setTimeout(rgbResponse, 1000);


