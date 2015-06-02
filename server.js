var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    app = express();

app.use(express.static('public'));

app.get( '/api/', function(req, res) {
  res.send('API is running');
});

app.get( 'api/visits/', function(req, res){
  return VisitModel.find(function(err, visits){
    if (!err) {
      return res.send(visits);
    } else {
      return console.log(err);
    }
  });
})

var port = process.envPORT || 3000;
app.listen( port, function() {
  console.log( 'Express server listening on port ', port );
});

//Connect to database

mongoose.connect('mongodb://localhost/visit_database');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Connected to database');
});

//Schemas

var Visit = new mongoose.Schema({

})
