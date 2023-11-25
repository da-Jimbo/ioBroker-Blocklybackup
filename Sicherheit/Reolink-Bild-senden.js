var cam_img = 'http://192.168.1.169/cgi-bin/api.cgi?cmd=Snap&channel=0&rs=Get&user=XXX&password=XXX';   // Pfad zum Kamerabild
var trigger_Bewegung = '0_userdata.0.Sicherheit.Parkplatzbild_aufnehmen';  // Datenpunkt zur autmatischen Auslösung bei Bewegung
var trigger_versenden = '0_userdata.0.Sicherheit.Parkplatzbild_senden';  // Datenpunkt zum Senden
var img_path = '/opt/iobroker/tausch/';   // Pfad zum lokalen Speicherort der aufgenommenen Bilder. Bilder werden bei jeder Auslösung überschrieben. Pfad muss schon vorhanden sein!
 
 
// Variablendeklaration und Initialisierung bei Scriptstart
var stateTrigger_aufnahme = getState(trigger_Bewegung).val;
var stateTrigger_senden = getState(trigger_versenden).val;
var request = require('request');
var fs      = require('fs');
  

// Funktion Bilder versenden
function sendImage (pfad) {
    setTimeout(function() {
        sendTo('telegram.0', {
    text:   pfad,
    user: 'Chriss, Lisa'
    //user: 'Chriss'
});
        log('Bild bei Gong verschickt.');
    }, 2000);
}
 

// Funktion Bilder speichern
function saveImage() {
    request.get({url: cam_img, encoding: 'binary'}, function (err, response, body) {
        fs.writeFile(img_path + 'parkplatz.jpg', body, 'binary', function(err) {
        if (err) {
            log('Fehler beim Speichern vom parkplatzbild: ' + err, 'warn');
        } else {
            //setState(sendenfreigabe, true);
            log('Bild gespeichert');
        }
      }); 
    });
}

function sendToTelegram() {
    sendImage(img_path + 'parkplatz.jpg');
}


// Bild aufnehmen bei Bewegung
on(trigger_Bewegung, function(dp) {
    stateTrigger_aufnahme = dp.newState.val;
    if (stateTrigger_aufnahme === true) {
        saveImage();
        setState(trigger_Bewegung, false);     // zum Zurücksetzen des Triggers.
    }
});


// Bild Senden wenns klingelt
on(trigger_versenden, function(dp) {
    stateTrigger_senden = dp.newState.val;
    if (stateTrigger_senden === true) {
        sendToTelegram();
        setState(trigger_versenden, false);     // zum Zurücksetzen des Triggers.
    }
});
