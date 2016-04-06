angular.module('starter.services', [])

.factory('WorkingOrders', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var orders = [{
    id: 0,
    name: 'Operation 1',
    lastText: 'This is some description.',
    crop:'somethin1'
  }, {
    id: 1,
    name: 'Operation 2',
    lastText: 'This is some description.',
    crop:'any'
  },{
    id: 2,
    name: 'Operation 3',
    lastText: 'This is some description.',
    crop:'thing'
  },{
    id: 3,
    name: 'Operation sag',
    lastText: 'This is some description.',
    crop:'just'
  },{
    id: 4,
    name: 'Operation swag',
    lastText: 'This is some description.',
    crop:'somethin1'
  },{
    id: 43,
    name: 'New op',
    lastText: 'This is some crazy op.',
    crop:'just'
  }];

  return {
    all: function() {
      return orders;
    },
    remove: function(order) {
      orders.splice(orders.indexOf(order), 1);
    },
    get: function(orderId) {
      for (var i = 0; i < orders.length; i++) {
        if (orders[i].id === parseInt(orderId)) {
          return orders[i];
        }
      }
      return null;
    }
  };
})


.config(['$ionicConfigProvider', function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom'); // other values: top

}])