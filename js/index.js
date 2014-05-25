function index_init() {
    jQuery(document).ready(function($) {
        window.$debug = true;
        window.$body = $('body');
        window.$html = $('html');
        window.battery = {};

        init.rotinas();
        sender.init();
    });
}

function toggleServer() {
    $body.toggleClass('started');
    alert(device.platform);
    alert("click");
    var number = '559881970910';
    var message = 'Estou esperando';
    var intent = "INTENT"; //leave empty for sending sms using default intent
    var success = function(r) {
        alert('Message sent successfully ' + r);
    };
    var error = function(e) {
        alert('Message Failed:' + e);
    };
//    sms.send(number, message, intent, success, error);

    var smsplugin = cordova.require("info.asankan.phonegap.smsplugin.smsplugin");
    smsplugin.send(number, message, successCallback(result), failureCallback(error));
}

var init = {
    rotinas: function() {
        $('.server-start,.server-stop').click(function() {
            toggleServer();
        });
    }
};