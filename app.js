var express = require('express'),
    swig = require('swig'),
    easyrtc = require('easyrtc'),
    io = require('socket.io'),
    http = require('http');

app = express();
app.use(express.static('public'));

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', false);
swig.setDefaults({ cache: false });

app.get('/', function (req, res) {
    res.render('index', { /* template locals context */ });
});

var webServer = http.createServer(app).listen(3000);
var socketServer = io.listen(webServer, {'log level':1});
var rtc = easyrtc.listen(app, socketServer);