function index_init() {
    jQuery(document).ready(function($) {
        window.$debug = true;
        window.$body = $('body');
        window.$html = $('html');
        window.battery = {};

        init.rotinas();
        init.comandos();
        sender.init();
    });
}

function toggleServer() {
    $body.toggleClass('started');
    alert(device.platform);
    alert("click");
//    var number = '559881970910';
//    var message = 'Estou esperando';
//    var intent = "INTENT"; //leave empty for sending sms using default intent
//    var success = function() {
//        alert('Message sent successfully');
//    };
//    var error = function(e) {
//        alert('Message Failed:' + e);
//    };
//    sms.send(number, message, intent, success, error);
}

var init = {
    comandos: function() {
        toggleServer();
    },
    rotinas: function() {
        $('.server-start,.server-stop').click(function() {
            toggleServer();
        });
    }
};