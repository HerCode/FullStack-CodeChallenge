angular.module('groceryListApp').controller('MainController', function($http){
  var vm = this;
  vm.getProduce = [];
  vm.getMeatSeafood = [];
  vm.getDairy = [];
  vm.getBakeryDryGoods = [];

  vm.getProduce = function() {
      $http.get('/produce').then(function(response){
        console.log('Here are all of your produce items: ', response);
        vm.produce = response.data;
      });
  };

  vm.getMeatSeafood = function() {
      $http.get('/meat_seafood').then(function(response){
        console.log('Here are all of your meat and seafood items: ', response);
        vm.meats_seafood = response.data;
      });
  };

  vm.getDairy = function() {
      $http.get('/dairy').then(function(response){
        console.log('Here are all of your dairy items: ', response);
        vm.dairy = response.data;
      });
  };

  vm.getBakeryDryGoods = function() {
      $http.get('/bakery_dry_goods').then(function(response){
        console.log('Here are all of your bakery and dry good items: ', response);
        vm.bakery_dry_goods = response.data;
      });
  };

  vm.submitItem = function() {
    var sendData = {};
    var splitItem = vm.tempName.split(' ');
    sendData.item = splitName[0];
    sendData.quantity = splitName[1];
    vm.names.push(splitName);
    $http.post('/produce', sendData).then(handleNameSuccess, handleFailure);
  };

  vm.submitItem = function() {
    var sendData = {};
    var splitItem = vm.tempName.split(' ');
    sendData.item = splitName[0];
    sendData.quantity = splitName[1];
    vm.names.push(splitName);
    $http.post('/meat_seafood', sendData).then(handleNameSuccess, handleFailure);
  };

  vm.submitItem = function() {
    var sendData = {};
    var splitItem = vm.tempName.split(' ');
    sendData.item = splitName[0];
    sendData.quantity = splitName[1];
    vm.names.push(splitName);
    $http.post('/dairy', sendData).then(handleNameSuccess, handleFailure);
  };

  vm.submitItem = function() {
    var sendData = {};
    var splitItem = vm.tempName.split(' ');
    sendData.item = splitName[0];
    sendData.quantity = splitName[1];
    vm.names.push(splitName);
    $http.post('/bakery_dry_goods', sendData).then(handleNameSuccess, handleFailure);
  };

  function handleProduceSuccess(response){
    console.log('Success', response);
    vm.getProduce();
  }

  function handleMeastSeafoodSuccess(response){
    console.log('Success', response);
    vm.getMeatSeafood();
  }

  function handleDairySuccess(response){
    console.log('Success', response);
    vm.getDairy();
  }

  function handleBakeryDryGoodsSuccess(response){
    console.log('Success', response);
    vm.getBakeryDryGoods();
  }

  function handleFailure(response){
    console.log('Failure', response);
  }

  vm.getProduce();
  vm.getMeatSeafood();
  vm.getDairy();
  vm.getBakeryDryGoods();

});
