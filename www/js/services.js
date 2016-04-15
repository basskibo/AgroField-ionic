angular.module('starter.services', [])

.factory('WorkingOrders', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var orders = [{
    id: 0,
    operacija: 'Setva uskorednim sejalicama',
    kultura: 'Semenska tvrda psenica',
    input:'Seme',
    cena:'30000',
    vreme:'14/7/2016'
  },
  {
     id: 1,
     operacija: 'Setva uskorednim sejalicama',
     kultura: 'Semenska tvrda psenica',
     input:'Seme',
     cena:'90000',

     vreme:'15/10/2015'
   },
   {
     id: 2,
     operacija: 'Razrivanje zemljišta čizel plugom',
     kultura: 'Merkantilni usev šećerne repe',
     input:'Gorivo',
     cena:"42000",
     vreme:'14/4/2016'
   },
   {
     id: 3,
     operacija: 'Izvoz i rasturanje osoke',
     kultura: 'Merkantilni ozimi stočni ječam',
     input:'Osoka',
     vreme:'11/9/2015'
   },
   {
     id: 4,
     operacija: 'Međuredno kultiviranje',
     kultura: 'Malina',
     input:'Gorivo',
     vreme:'14/7/2016'
   },
   {
     id: 5,
     operacija: 'Tarupiranje posle žetve',
     kultura: 'Merkantilna tvrda pšenica – jara',
     input:'Gorivo',
     vreme:'21/8/2016'
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
    },
    edit:function(){
      return login.html;
    }
  };
})


.config(['$ionicConfigProvider', function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom'); // other values: top

}])
