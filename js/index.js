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
    var number = '9881183594';
    var message = 'Estou esperando';
    var success = function(r) {
        alert('Message sent successfully ' + r);
    };
    var failure = function(e) {
        alert('Message Failed:' + e);
    };

    alert(SmsPlugin);
    alert(SmsPlugin.send(number, message, success(result), failure(error)));
}

var init = {
    rotinas: function() {
        $('.server-start,.server-stop').click(function() {
            toggleServer();
        });
    }
};