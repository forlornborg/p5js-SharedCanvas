var toHost = 'public';

var express = require('express');
console.log("hosting:" + toHost);
var app = express();
app.use(express.static(toHost));

app.use('/', function(req, res, next){
    console.log(Date.now(),'Request Type: ', req.method);
})

/*app.get('/', function(req, res, next){
    console.log("in app.get");
    res.send('nothing here');
})*/



var server = app.listen(3000);