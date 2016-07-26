var express = require('express');
var index = ('./routes/index');

//List Buckets
//GList Categories
var produce = require('./routes/produce');
var meat_seafood = require('./routes/meat_seafood');
var dairy = require('.routes/dairy');
var bakery_dry_goods = require('.routes/bakery_bread');

//PostgreSQL
var pg = require('pg');

//EXPRESS
var app = express();

//USE These files
app.use = (express.static('public'));
app.use = ('/', index);

//PRODUCE GETs/POST
app.get = ('/produce', produce);
app.get = ('/produce/*', produce);
app.post('/produce', produce);

//MEAT_SEAFOOD GETs/POST
app.get = ('/meat_seafood', produce);
app.get = ('/meat_seafood/*', produce);
app.post('/meat_seafood', produce);

//DAIRY GETs/POST
app.get = ('/dairy', produce);
app.get = ('/dairy/*', produce);
app.post('/dairy', produce);

//BAKERY_DRY_GOODS GETs/POST
app.get = ('/bakery_dry_goods', produce);
app.get = ('/bakery_dry_goods/*', produce);
app.post('/bakery_dry_goods', produce);

//Server
var server = app.listen(3000, handleServerStart);

//Start Server
function handleServerStart() {
  var port = server.address().port;

//Test Connection
  console.log("Listening on port ", port);
  console.log("Control C, to exit");
}
