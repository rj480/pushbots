// Initialize app
var myApp = new Framework7({
    material:true,
    swipePanel:'both',

   
});

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");

/*    iniciar();*/
});
    
/*
function iniciar() {
 
}*/

myApp.onPageInit('index', function (page) {
    window.plugins.PushbotsPlugin.initialize("59093d1b4a9efa1a538b4567", {"android":{"sender_id":"1018992769151"}});

    window.plugins.PushbotsPlugin.on("notification:received", function(data){
    console.log("received:" + JSON.stringify(data));
    
    //Silent notifications Only [iOS only]
    //Send CompletionHandler signal with PushBots notification Id
    window.plugins.PushbotsPlugin.done(data.pb_n_id);
});
  
});
