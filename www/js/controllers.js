angular.module('starter.controllers', ['ionic', 'onezone-datepicker','ion-datetime-picker','ionic-multiselect','pascalprecht.translate','starter.services','ionic-modal-select'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$http) {

})





.controller('DashCtrl', function($scope, $ionicModal,$http,$state,$http,WorkingOrders) {
$scope.operacija  = [];
$scope.kultura = [];
$scope.input = [];
$scope.materijal= [];



  

 

$scope.onezoneDatepicker = {
    date: new Date(), // MANDATORY
    mondayFirst: false,
    months: ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Octobar', 'Novembar', 'Decembar'],
    daysOfTheWeek: ['Ned', 'Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub'],     
    startDate: new Date(),
    disablePastDays: false,
    disableSwipe: false,
    disableWeekend: false,
    showDatepicker: false,
    showTodayButton: true,
    calendarMode: false,
    hideCancelButton: false,
    hideSetButton: false,
    // disableDaysOfWeek: [0,6] ,
    disableDaysOfWeek:false,
    hideSetButton:true,
    callback: function(value){
        // your code
        //console.log('callback');
    }
};

 // Kultura.get().then(function (msg) {
 //        $scope.msg = msg;
 //        console.log('get u kontroleru');
 //    });
    var url = "";
      if(ionic.Platform.isAndroid()){
            $http.get('/android_asset/www/json/kultura.json').success(function(data) {
          $scope.kultura = data;
   });
  $http.get('/android_asset/www/json/materijal.json').success(function(data) {
          $scope.materijal = data;
   });

  $http.get('/android_asset/www/json/radnik.json').success(function(data) {
          $scope.radnici = data;
   });

  $http.get('/android_asset/www/json/pogonska_masina.json').success(function(data) {
          $scope.pogonske_masine  = data;
   });

  $http.get('/android_asset/www/json/prikljucna_masina.json').success(function(data) {
          $scope.prikljucne_masine = data;
   });

  $http.get('/android_asset/www/json/radna_operacija.json').success(function(data) {
          $scope.operacija = data;
   });



    }else{
      $http.get('/json/kultura.json').success(function(data) {
              $scope.kultura = data;
       });

       $http.get('/json/materijal.json').success(function(data) {
              $scope.materijal = data;
       });

      $http.get('/json/radnik.json').success(function(data) {
              $scope.radnici = data;
       });

      $http.get('/json/pogonska_masina.json').success(function(data) {
              $scope.pogonske_masine  = data;
       });

      $http.get('/json/prikljucna_masina.json').success(function(data) {
              $scope.prikljucne_masine = data;
       });

      $http.get('/json/radna_operacija.json').success(function(data) {
              $scope.operacija = data;
       });

    }


  $scope.onValueChanged = function(value){
  }



    $scope.createOrder = function(order,callback){
      $scope.orders = WorkingOrders.all();
      var godina = $scope.onezoneDatepicker.date.getFullYear();
      //console.log(godina);

      var mesec = $scope.onezoneDatepicker.date.getMonth();
      var dan = $scope.onezoneDatepicker.date.getDate();
      var datum = godina + '/' + mesec + "/" + dan;
      //console.log(order.operacija + " "+ order.kultura + " " + order.cena + " "+order.input ); 
    $scope.orders.push({
      operacija: order.operacija.naziv,
      kultura: order.kultura.naziv,
      cena: order.cena,
      input: order.input,
      vreme: datum,
      pocetak : order.pocetak,
      kraj: order.kraj,

    })
       
    $state.go('app.orders');

}

})

.controller('NewReportCtrl', function($scope, $ionicModal,$http,$state,$http,Reports,$ionicHistory,$window  ) {

$scope.katOpst  = [];
$scope.plot = [];
$scope.activity = [];




$scope.onezoneDatepicker = {
    date: new Date(), // MANDATORY
    mondayFirst: false,
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    daysOfTheWeek: ['Ned', 'Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub'],     
    startDate: new Date(),
    disablePastDays: false,
    disableSwipe: false,
    disableWeekend: false,
    showDatepicker: false,
    showTodayButton: true,
    calendarMode: false,
    hideCancelButton: false,
    hideSetButton: false,
    // disableDaysOfWeek: [0,6] ,
    disableDaysOfWeek:false,
    hideSetButton:true,
    callback: function(value){
        // your code
    }
};



    $scope.createReport = function(report){
      $scope.reports = Reports.all();
      var godina = $scope.onezoneDatepicker.date.getFullYear();
      //console.log(godina);

      var mesec = $scope.onezoneDatepicker.date.getMonth();
      var dan = $scope.onezoneDatepicker.date.getDate();
      var datum = godina + '/' + mesec + "/" + dan;
    $scope.reports.push({
      //vrstaAktivnosti: report.katOpst,
      vrstaAktivnosti: report.activity,
      parcela: report.plot,
      opis: report.description,
      datum :datum

    })

    $state.go('app.reports');

}

})


.controller('EditOrderCtrl', function($scope, $ionicModal,$http,$state,$http,WorkingOrders,$ionicHistory,$window  ) {
    console.log("za edit : " + $scope.zaEdit);



  $scope.onezoneDatepicker = {
    date: new Date(), // MANDATORY
    mondayFirst: false,
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    daysOfTheWeek: ['Ned', 'Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub'],     
    startDate: new Date(),
    disablePastDays: false,
    disableSwipe: false,
    disableWeekend: false,
    showDatepicker: false,
    showTodayButton: true,
    calendarMode: false,
    hideCancelButton: false,
    hideSetButton: false,
    // disableDaysOfWeek: [0,6] ,
    disableDaysOfWeek:false,
    hideSetButton:true,
    callback: function(value){
        // your code
    }
};



})

.controller('ChatsCtrl', function($scope, WorkingOrders,$stateParams,$state) {




  $scope.sortiranje = "-vreme";
  $scope.orders = WorkingOrders.all();
  $scope.remove = function(order) {

	WorkingOrders.remove(order);

  };
  $scope.edit = function(order){
    $scope.order = WorkingOrders.get($stateParams.orderId);
 

    $scope.zaEdit.push({

      operacija: order.operacija,
      vreme : order.vreme
    })
    console.log($scope.zaEdit[0]);

    $state.go('app.editOrder',$scope.zaEdit[0]);
  }
})

.controller('ReportsCtrl', function($scope, Reports) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.sortiranje = "-datum";
  $scope.reports = Reports.all();
  $scope.remove = function(report) {

  Reports.remove(report);

  };
})


.controller('ChatDetailCtrl', function($scope, $stateParams, WorkingOrders) {
  $scope.order = WorkingOrders.get($stateParams.orderId),$scope.user;
})

.controller('ReportDetailCtrl', function($scope, $stateParams, Reports) {
  $scope.report = Reports.get($stateParams.reportId);
})



.controller('LoginCtrl', function($scope, $state,$http,WorkingOrders,$ionicPopup) {



        

        $scope.user = {};
        $scope.korisnik ={};
        $scope.user.farm= 'SuperAdmin';

         $scope.user.username= 'Bojan';
         $scope.user.password= '1243!';
        // console.log($scope.user);
        // calling our submit function.
        $scope.signIn = function() {

        //console.log($scope.user);     

        // Posting data to php file
        $http({
          method  : 'POST',
          withCredentials: false,
          url     : 'http://agrolife.greensoft.co:3000/login',
          data    : $scope.user
         })
          .success(function(data) {
            console.log(data);
             $scope.message = data.message;
            // $cookies['kolacic']='kolacic';
             // console.log($cookies);

          
            if (data.success) {
              // Showing errors.
                 var alertPopup = $ionicPopup.alert({
                    title:'Welcome '  + $scope.user.username,
                    template:'Hellooo'
              });
              $state.go('app.orders');
                //var favoriteCookie = $cookies.get('connect.sid');

              //console.log('cookies:'+ JSON.stringify($cookies.getAll()));
              // console.log('cookies:'+ JSON.stringify(favoriteCookie));

              // $http({
              //   method:'POST',
              //   withCredentials: false,
              //   url: 'http://agrolife.greensoft.co:3000/materijal/read',
              //   data: $scope.user
              // })

            } else {
              $scope.message = data.message;

              var alertPopup = $ionicPopup.alert({
              title:'Wrong user',
              template:$scope.message
            });

              $scope.message = data.message;
          
            }
          });
        };
})





.controller('ForgotPassCtrl',function($scope,$translate){
	console.log("Forgoten password...")
})


.controller('SettingsCtrl', function($scope,$ionicPopup,$translate) {
  $scope.settings = {
    enableFriends: true,
    enableMaps : true
  };

  $scope.changeLanguage = function (langKey,$translateProvider) {
    //$translateProvider.preferredLanguage(langKey);
    // var currentLang = $translate.proposedLanguage() || $translate.use();
    // console.log(currentLang);
    // $translate.uses(langKey);
    $translate.use(langKey); 
    if(langKey == 'rs'){
      text = 'Jezik promenjen na srpski';
    }
 

    var lng = $translate.use();
    var title ;
    console.log(lng);
            console.log($scope.user);     

    if(lng == 'rs'){
      lng = "Jezik promenjen na Srpski";
      title = "Jezik";
    }else if(lng=='en'){
      lng= "Language changed to English";
      title = 'Language';
    }else{
      lng= "تغيير اللغة إلى العربية";
      title = 'لغة';
    }
   var alertPopup = $ionicPopup.alert({
              title:title,
              template:lng
      });
  };



})

// .controller('WeatherSearchCtrl',function ($scope, $http){

//   $scope.model = {term: ''};

//   $scope.search = function () {
//     $http.get('https://maps.googleapis.com/maps/api/geocode/json', {params: {address: $scope.model.term}}).success(function (response) {
//       $scope.results = response.results;
//     });
//   };


// })

.controller('SettingsController', function ($scope, Settings, Locations) {
  $scope.settings = Settings;
  $scope.locations = Locations.data;
  $scope.canDelete = false;

  $scope.remove = function (index) {
    Locations.toggle(Locations.data[index]);
  };
})

//kontroler za prognozu
.controller('WeatherController', function ($scope, $http, $stateParams, $ionicActionSheet, $ionicModal, Locations, Settings) {
  $scope.params = $stateParams;
  $scope.settings = Settings;
  console.log('ispred apija');
  $http.get('/api/forecast/' + $stateParams.lat + ',' + $stateParams.lng, {params: {units: Settings.units}}).success(function (forecast) {
    $scope.forecast = forecast;
  });

  var barHeight = document.getElementsByTagName('ion-header-bar')[0].clientHeight;
  $scope.getWidth = function () {
    return window.innerWidth + 'px';
  };
  $scope.getTotalHeight = function () {
    return parseInt(parseInt($scope.getHeight()) * 3) + 'px';
  };
  $scope.getHeight = function () {
    return parseInt(window.innerHeight - barHeight) + 'px';
  };

  $scope.showOptions = function () {
    var sheet = $ionicActionSheet.show({
      buttons: [
        {text: 'Add to Favorite'},
        {text: 'Set as Primary'},
        {text: 'Sunrise Sunset Chart'}
      ],
      cancelText: 'Cancel',
      buttonClicked: function (index) {
        if (index === 0) {
          Locations.toggle($stateParams);
        }
        if (index === 1) {
          Locations.primary($stateParams);
        }
        if (index === 2) {
          $scope.showModal();
        }
        return true;
      }
    });
  };

  $scope.showModal = function () {
    if ($scope.modal) {
      $scope.modal.show();
    } else {
      $ionicModal.fromTemplateUrl('templates/modal-chart.html', {
        scope: $scope
      }).then(function (modal) {
        $scope.modal = modal;
        var days = [];
        var day = Date.now();
        for (var i = 0; i < 365; i++) {
          day += 1000 * 60 * 60 * 24;
          days.push(SunCalc.getTimes(day, $scope.params.lat, $scope.params.lng));
        }
        $scope.chart = days;
        $scope.modal.show();
      });
    }
  };
  $scope.hideModal = function () {
    $scope.modal.hide();
  };
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
});