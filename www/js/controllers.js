angular.module('starter.controllers', ['ionic', 'onezone-datepicker','pascalprecht.translate','starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$http) {



    // $http.get('/json/orders.json').success(function(data) {
    //     $scope.orders=data.orders;
    // });
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // // Form data for the login modal
  // $scope.loginData = {};

  // // Create the login modal that we will use later
  // $ionicModal.fromTemplateUrl('templates/login.html', {
  //   scope: $scope
  // }).then(function(modal) {
  //   $scope.modal = modal;
  // });

  // // Triggered in the login modal to close it
  // $scope.closeLogin = function() {
  //   $scope.modal.hide();
  // };

  // // Open the login modal
  // $scope.login = function() {
  //   $scope.modal.show();
  // };

  
})


// .controller('DocumentCtrl', function($scope, Document) {
//     $scope.documents = [];
//     $scope.document = null;
//     // Get all the documents
//     Document.all().then(function(documents){
//         $scope.documents = documents;
//     });
//     // Get one document, example with id = 2
//     Document.getById(2).then(function(document) {
//         $scope.document = document;
//     });
// })

.controller('DashCtrl', function($scope, $ionicModal,$http,$state,$http,WorkingOrders) {


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

    $scope.createOrder = function(order){
      $scope.orders = WorkingOrders.all();

      console.log(order.operacija + " "+ order.kultura + " " + order.cena + " "+order.input ); 
    $scope.orders.push({
      operacija: order.operacija,
      kultura: order.kultura,
      cena: order.cena,
      input: order.input,
      vreme : "14/15/2014"

    })
       
    $state.go('app.orders');

}

})

.controller('NewReportCtrl', function($scope, $ionicModal,$http,$state,$http,Reports,$ionicHistory,$window  ) {


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

    $scope.reports.push({
      vrstaAktivnosti: report.vrstaAktivnosti,
      katOpst: report.katOpst,
      parcela: report.parcela,
      opis: report.opis,
      datum : "14/15/2014"

    })
       
     //$ionicHistory.clearHistory();
    //$window.location.reload(false);


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

  console.log('Edit');


})

.controller('ChatsCtrl', function($scope, WorkingOrders,$stateParams,$state) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.zaEdit = [];

  $scope.sortiranje = "-vreme";
  $scope.orders = WorkingOrders.all();
  $scope.remove = function(order) {

	WorkingOrders.remove(order);

  };
  $scope.edit = function(order){
    $scope.order = WorkingOrders.get($stateParams.orderId);
    console.log("o: " + order);
    console.log("operacija: " +order.operacija);

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
  $scope.order = WorkingOrders.get($stateParams.orderId);
})

.controller('ReportDetailCtrl', function($scope, $stateParams, Reports) {
  $scope.report = Reports.get($stateParams.reportId);
})



.controller('LoginCtrl', function($scope, $state,$http,WorkingOrders,$ionicPopup) {
  //   $scope.signIn = function(user){
  //       if(user.farm == "MMOA"&& user.username == "admin" && user.password== '1243!' ){
  //          var successPoput = $ionicPopup.alert({
  //             title:'Welcome ' + user.username,
  //             template:'You are now logged in'
  //          });
  //          $state.go('app.orders');

  //       }else{
  //           var alertPopup = $ionicPopup.alert({
  //             title:'Wrong user',
  //             template:'Please try again'
  //           });
  //       }
  // }

   // create a blank object to handle form data.
        $scope.user = {};
                $scope.user.farm= 'demo';

        $scope.user.username= 'demo';
                $scope.user.password= 'demo';
      console.log($scope.user);
      // calling our submit function.
        $scope.signIn = function() {
        // Posting data to php file
        $http({
          method  : 'POST',
          url     : 'http://agrolife.greensoft.co/login',
          data    : $scope.user, //forms user object
          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
         })
          .success(function(data) {
            if (data.errors) {
              // Showing errors.
              $scope.errorName = data.errors.name;
              $scope.errorUserName = data.errors.username;
              $scope.errorEmail = data.errors.email;
            } else {

              $scope.message = data.message;
               var alertPopup = $ionicPopup.alert({
              title:'Wrong user',
              template:'Please try again'
            });
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
    if(lng == 'rs'){
      lng = "Jezik promenjen na Srpski";
      title = "Jezik";
    }else{
      lng= "Language changed to English";
      title = 'Language';
    }
   var alertPopup = $ionicPopup.alert({
              title:title,
              template:lng
      });
  };



})

.controller('WeatherSearchCtrl',function ($scope, $http){

  $scope.model = {term: ''};

  $scope.search = function () {
    $http.get('https://maps.googleapis.com/maps/api/geocode/json', {params: {address: $scope.model.term}}).success(function (response) {
      $scope.results = response.results;
    });
  };


})

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