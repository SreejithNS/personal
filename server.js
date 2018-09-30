var express = require('express');
var app = express();
var ip = require("ip");
var port = 8080;
var c = require('chalk');


app.use('/', express.static(__dirname + '/public/www/'));
app.listen(port,function(err) {
   console.log('URL http://' + ip.address() + ':'+port+'/');
   if(err) {
    console.log(c.red('Error ')+err);
 }
});

