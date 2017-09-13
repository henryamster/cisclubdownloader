
//Node server for EKU  CIS Club DOWNLOADER

//Reqs
//http, for obvious reasons
var http = require('http');
//path and fs for read/write and nav
var fs = require('fs');
var path = require('path');
//express middleware
var express = require('express');
//create router and server
var router = express();
var server = http.createServer(router);


//resolve paths to client e.g. '/'' redirects to '/client/index.html'
router.use(express.static(path.resolve(__dirname, 'client')));


//listen for incoming connections
server.listen(process.env.PORT, process.env.ip, function(){
  console.log("server is up and runnning!");
}); 





/*

//Node implementation of curl piping to local directory
//need to dynamically create proper paths for DLs

var download = function(url, dest, cb) {
  var file = fs.createWriteStream(dest);
  var request = http.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(cb);  // close() is async, call cb after close completes.
    });
  }).on('error', function(err) { // Handle errors
    fs.unlink(dest); // Delete the file async. (But we don't check the result)
    if (cb) cb(err.message);
  });
};

*/