angular.module('starter.controllers', ['ionic', 'onezone-datepicker'])



.controller('DashCtrl', function($scope, $ionicModal) {


$scope.onezoneDatepicker = {
    date: new Date(), // MANDATORY                     
    mondayFirst: false,                
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    daysOfTheWeek: ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'],     
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

// .controller('LoginCtrl', function($scope, $stateParams, WorkingOrders) {
//   $scope.orders = WorkingOrders.get($stateParams.orderId);

// })



.controller('LoginCtrl', function($scope, $state,WorkingOrders) {
  
  $scope.signIn = function(user) {
    $state.go('tab.orders');
  };
  
})



.controller('ForgotPassCtrl',function($scope){
	console.log("Forgoten password...")
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true,
    enableMaps : true

  };
 
})



.controller('MapCtrl', function($scope, $ionicLoading, $compile) {
      function initialize() {
        var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        $scope.map = map;
      }
      google.maps.event.addDomListener(window, 'load', initialize);
      
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
      
      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click');
      };

})
