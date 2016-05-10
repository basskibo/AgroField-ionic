angular.module('starter.services', ['starter.config'])


//NOTE: We are including the constant `ApiEndpoint` to be used here.
.factory('Api', function($http, ApiEndpoint) {
  console.log('ApiEndpoint', ApiEndpoint)

  var getApiData = function() {
    return $http.get(ApiEndpoint.url + '/tasks')
      .then(function(data) {
        console.log('Got some data: ', data);
        return data;
      });
  };

  return {
    getApiData: getApiData
  };
})



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
   },
    {
     id: 6,
     operacija: 'Tarupiranje posle žetve',
     kultura: 'Merkantilna tvrda pšenica – jara',
     input:'Gorivo',
     vreme:'21/8/2016'
   },
    {
     id: 7,
     operacija: 'Tarupiranje posle žetve',
     kultura: 'Merkantilna tvrda pšenica – jara',
     input:'Gorivo',
     vreme:'21/8/2016'
   },
    {
     id: 8,
     operacija: 'Tarupiranje posle žetve',
     kultura: 'Merkantilna tvrda pšenica – jara',
     input:'Gorivo',
     vreme:'21/8/2016'
   },
    {
     id: 9,
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
    edit:function(orderId){
        for (var i = 0; i < orders.length; i++) {
        if (orders[i].id === parseInt(orderId)) {
          return orders[i];
        }
      }
      return null;
    }
  };
})


.factory('Reports', function() {
     var reports = [{
      id: 0,
      datum: '11/2/2016',
      katOpst: 'This is some description.',
      parcela:'somethin1',
      vrstaAktivnosti:'somethin1',
      opis:'somethin jrdhtfg1'
    },
    {
      id: 1,
      datum: '21/3/2013',
      katOpst: 'This is some description.',
      parcela:'somethin2',
      vrstaAktivnosti:'sethin1',
      opis:'someth thdgin1'
    },
    {
      id: 2,
      datum: '22/5/2014',
      katOpst: 'This is some description.',
      parcela:'somethin3',
      vrstaAktivnosti:'sthin1',
      opis:'somet hstdg hin1'
    },
    {
      id: 3,
      datum: '27/2/2015',
      katOpst: 'This is some description.',
      parcela:'somethin4',
      vrstaAktivnosti:'somethi',
      opis:'somet dg fd hin1'
    },
 ];


  return {
     all: function() {
      return reports;
    },
    remove: function(report) {
      reports.splice(reports.indexOf(report), 1);
    },
    get: function(reportId) {
      for (var i = 0; i < reports.length; i++) {
        if (reports[i].id === parseInt(reportId)) {
          return reports[i];
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


.factory('DB', function($q, DB_CONFIG) {
    var self = this;
    self.db = null;

    self.init = function() {
        // Use self.db = window.sqlitePlugin.openDatabase({name: DB_CONFIG.name}); in production
        self.db = window.openDatabase(DB_CONFIG.name, '1.0', 'database', -1);

        angular.forEach(DB_CONFIG.tables, function(table) {
            var columns = [];

            angular.forEach(table.columns, function(column) {
                columns.push(column.name + ' ' + column.type);
            });

            var query = 'CREATE TABLE IF NOT EXISTS ' + table.name + ' (' + columns.join(',') + ')';
            var queryi = "INSERT INTO orders VALUES ('51','Operacija','12/4/2014')";
            console.log(queryi);
            self.query(queryi);
            self.query(query);
            //console.log('Table ' + table.name + ' initialized');
           self.all = function() {
                return DB.query('SELECT * FROM orders')
                .then(function(result){
                    return DB.fetchAll(result);
                    //console.log(result);
        });
                all();
    };
        });
    };

    self.query = function(query, bindings) {
        bindings = typeof bindings !== 'undefined' ? bindings : [];
        var deferred = $q.defer();

        self.db.transaction(function(transaction) {
            transaction.executeSql(query, bindings, function(transaction, result) {
                deferred.resolve(result);
            }, function(transaction, error) {
                deferred.reject(error);
            });
        });

        return deferred.promise;
    };

    self.fetchAll = function(result) {
        var output = [];

        for (var i = 0; i < result.rows.length; i++) {
            output.push(result.rows.item(i));
        }
        
        return output;
    };

    self.fetch = function(result) {
        return result.rows.item(0);
    };

    return self;
})
// Resource service example
.factory('Document', function(DB) {
    var self = this;
    
    self.all = function() {
        return DB.query('SELECT * FROM orders')
        .then(function(result){
            return DB.fetchAll(result);
            //console.log(result);
        });
    };
    
    self.getById = function(id) {
        return DB.query('SELECT * FROM documents WHERE id = ?', [id])
        .then(function(result){
            return DB.fetch(result);
        });
    };
    
    return self;
});