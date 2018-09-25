var http = require('http');
var ip = require("ip");
var port = 8080;

http.listen(port, function() {
   console.log('http      server.js: URL http://' + ip.address() + ':'+port+'/');
});