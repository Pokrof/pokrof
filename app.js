firebase.initializeApp({
    messagingSenderId: '705983922724'
});


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

