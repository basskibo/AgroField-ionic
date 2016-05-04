angular.module('starter.controllers', ['ionic', 'onezone-datepicker','pascalprecht.translate'])



.controller('DashCtrl', function($scope, $ionicModal) {


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

.controller('ChatsCtrl', function($scope, WorkingOrders) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.orders = WorkingOrders.all();
  $scope.remove = function(order) {

	WorkingOrders.remove(order);

  };
})




.controller('ChatDetailCtrl', function($scope, $stateParams, WorkingOrders) {
  $scope.order = WorkingOrders.get($stateParams.orderId);
})




.controller('LoginCtrl', function($scope, $state,$http,WorkingOrders,$ionicPopup) {
    $scope.signIn = function(user){
        if(user.farm == "MMOA"&& user.username == "admin" && user.password== '1243!' ){
           var successPoput = $ionicPopup.alert({
              title:'Welcome ' + user.username,
              template:'You are now logged in'
           });
           $state.go('tab.orders');

        }else{
            var alertPopup = $ionicPopup.alert({
              title:'Wrong user',
              template:'Please try again'
            });
          

          
        }

  }
})

  // $http.post('localhost:8000/login',{params:{farm:'MMOA'  , username:'admin' , password:"1243!"}}).success(function(response){
  //   console.log('nesto');
   
  // })





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
       //console.log(f);
    var lng = $translate.use();
    console.log(lng);

  };
  $scope.notificationOn = function(){
     var alertPopup = $ionicPopup.alert({
              title:'Language',
              template:'Language set to English'
      });
    //$translateProvider.preferredLanguage('rs');

  };
  // $scope.notificationOff = function(){
  //    var alertPopup = $ionicPopup.alert({
  //             title:'Language',
  //             template:'Language set to Serbian'
  //           });
  //   //$translateProvider.preferredLanguage('rs');

  // };

})

// .controller('WeatherSearchCtrl',function ($scope, $http){

//   $scope.model = {term: ''};

//   $scope.search = function () {
//     $http.get('https://maps.googleapis.com/maps/api/geocode/json', {params: {address: $scope.model.term}}).success(function (response) {
//       $scope.results = response.results;
//     });
//   };


// })

// .controller('SettingsController', function ($scope, Settings, Locations) {
//   $scope.settings = Settings;
//   $scope.locations = Locations.data;
//   $scope.canDelete = false;

//   $scope.remove = function (index) {
//     Locations.toggle(Locations.data[index]);
//   };
// })

//kontroler za prognozu
// .controller('WeatherController', function ($scope, $http, $stateParams, $ionicActionSheet, $ionicModal, Locations, Settings) {
//   $scope.params = $stateParams;
//   $scope.settings = Settings;
//   console.log('ispred apija');
//   $http.get('/api/forecast/' + $stateParams.lat + ',' + $stateParams.lng, {params: {units: Settings.units}}).success(function (forecast) {
//     $scope.forecast = forecast;
//   });

//   var barHeight = document.getElementsByTagName('ion-header-bar')[0].clientHeight;
//   $scope.getWidth = function () {
//     return window.innerWidth + 'px';
//   };
//   $scope.getTotalHeight = function () {
//     return parseInt(parseInt($scope.getHeight()) * 3) + 'px';
//   };
//   $scope.getHeight = function () {
//     return parseInt(window.innerHeight - barHeight) + 'px';
//   };

//   $scope.showOptions = function () {
//     var sheet = $ionicActionSheet.show({
//       buttons: [
//         {text: 'Add to Favorite'},
//         {text: 'Set as Primary'},
//         {text: 'Sunrise Sunset Chart'}
//       ],
//       cancelText: 'Cancel',
//       buttonClicked: function (index) {
//         if (index === 0) {
//           Locations.toggle($stateParams);
//         }
//         if (index === 1) {
//           Locations.primary($stateParams);
//         }
//         if (index === 2) {
//           $scope.showModal();
//         }
//         return true;
//       }
//     });
//   };

//   $scope.showModal = function () {
//     if ($scope.modal) {
//       $scope.modal.show();
//     } else {
//       $ionicModal.fromTemplateUrl('templates/modal-chart.html', {
//         scope: $scope
//       }).then(function (modal) {
//         $scope.modal = modal;
//         var days = [];
//         var day = Date.now();
//         for (var i = 0; i < 365; i++) {
//           day += 1000 * 60 * 60 * 24;
//           days.push(SunCalc.getTimes(day, $scope.params.lat, $scope.params.lng));
//         }
//         $scope.chart = days;
//         $scope.modal.show();
//       });
//     }
//   };
//   $scope.hideModal = function () {
//     $scope.modal.hide();
//   };
//   $scope.$on('$destroy', function() {
//     $scope.modal.remove();
//   });
//});