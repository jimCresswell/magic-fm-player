var express = require('express');
var app = express();


// app.get('/', function(req, res){
//   res.send('Server is working');
// });

app.use(express.static(__dirname + '/'));

app.use(errorHandler);

app.listen(3000);
console.log('Listening on port 3000');



function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}