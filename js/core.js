var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('pause', this.onPause, false);
        document.addEventListener('resume', this.onResume, false);
        window.addEventListener("batterystatus", this.onBatteryStatus, false);


    },
    onDeviceReady: function() {
        index_init();
        alert('ready!');
        app.receivedEvent('deviceready');
    },
    onPause: function() {
        app.receivedEvent('pause');
        $html.addClass('blur');
    },
    onResume: function() {
        app.receivedEvent('resume');
        $html.removeClass('blur');
    },
    onBatteryStatus: function(info) {
        alert("Level: " + info.level + " isPlugged: " + info.isPlugged);
        battery = info;
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};
