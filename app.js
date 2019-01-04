firebase.initializeApp({
    messagingSenderId: '448358493027'
});


var bt_register = $('#register');
var bt_delete = $('#delete');
var token = $('#token');
var form = $('#notification');
var massage_id = $('#massage_id');
var massage_row = $('#massage_row');

var info = $('#info');
var info_message = $('#info-message');

var alert = $('#alert');
var alert_message = $('#alert-message');

var input_body = $('#body');
var timerId = setInterval(setNotificationDemoBody, 10000);

function setNotificationDemoBody() {
    if (input_body.val().search(/^It's found today at \d\d:\d\d$/i) !== -1) {
        var now = new Date();
        input_body.val('It\'s found today at ' + now.getHours() + ':' + addZero(now.getMinutes()));
    } else {
        clearInterval(timerId);
    }
}

function addZero(i) {
    return i > 9 ? i : '0' + i;
}

setNotificationDemoBody();
resetUI();


if (
    'Notification' in window &&
    'serviceWorker' in navigator &&
    'localStorage' in window &&
    'fetch' in window &&
    'postMessage' in window
) {
    var messaging = firebase.messaging();

    messaging.requestPermission()
    .then(function() {
        // Get Instance ID token. Initially this makes a network call, once retrieved
        // subsequent calls to getToken will return from cache.
        messaging.getToken()
            .then(function(currentToken) {
                    console.log(currentToken)
            })
        });

    // already granted
    if (Notification.permission === 'granted') {
        getToken();
    }
}else{
    //
}
