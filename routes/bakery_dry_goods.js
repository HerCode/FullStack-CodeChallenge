var router = require('express').Router();
var path = require('path');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var pg = require('pg');

var config = {
  database: 'grocery_list',
  port: 5432
};

router.get('/bakery_dry_goods', function(request, response){
  var client = new pg.Client(config);
  client.connect(function(err){
    if(err){
      console.log('Connection error', err);
    }
  client.query('SELECT concat(item_name), \' \', quantity) AS name FROM people;', function(err, result){
    var bakery_dry_goodsList = {};
    bakery_dry_goodsList = result.rows;
    if(err){
      //console.log('Query error', err);
      response.sendStatus(500);
    } else {
      //console.log('Great success', bakery_dry_goodsList);
      response.send(bakery_dry_goodsList);
    }
    client.end(function(err){
      if(err){
        console.log('Disconnect error', err);
        }
      });
    });
  });
});


router.get('/bakery_dry_goods/:id', function(request, response){
  var id = request.params.id;
  var client = new pg.Client(config);
  client.connect(function(err){
    if(err){
      console.log('Connection error', err);
    }
    client.query('SELECT * FROM people WHERE person_id = $1;', [id], function(err, result){
      var bakery_dry_goodsList = {};
      bakery_dry_goodsList = result.rows;
      if(err){
        // console.log('Query error', err);
        response.sendStatus(500);
      } else {
        // console.log('Great success', bakery_dry_goodsList);
        response.send(bakery_dry_goodsList);
      }

      client.end(function(err){
        if(err){
          console.log('Disconnect error', err);
        }
      });
    });
  });
});

router.post('/bakery_dry_goods', jsonParser, function(request, response){
  var client = new pg.Client(config);
  var itemName = request.body.item;
  var itemQuantity = request.body.quantity;
  client.connect(function(err){
    if(err){
      console.log('Connection error', err);
    }
    client.query('INSERT INTO bakery_dry_goods (item_name, item_quantity) VALUES ($1, $2)', [itemName, itemQuantity], function(err, rows){
      if(err){
        response.sendStatus(500);
      } else {
        response.sendStatus(200);
      }
      client.end(function(err){
        if(err){
          console.log('Disconnect error', err);
        }
      });
    });
  });
});

module.exports = router;
