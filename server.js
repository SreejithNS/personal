var express = require('express');
var app = express();
var ip = require("ip");
var port = 8080;


app.use('/', express.static(__dirname + '/public/www/'));
app.listen(port,function(err) {
   console.log('http      server.js: URL http://' + ip.address() + ':'+port+'/');
   if(err) {
    console.log('http      server.js: Error at http://' + ip.address() + ':'+port+'/');
    console.log('http      server.js: Error : '+err);
 }
});

