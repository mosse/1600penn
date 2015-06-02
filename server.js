var express = require( 'express' ),
    mongoose = require( 'mongoose' );
    router = express.Router();

var app = express();

app.use(express.static('public'));

var port = process.envPORT || 3000;
app.listen( port, function() {
  console.log( 'Express server listening on port ', port );
});
