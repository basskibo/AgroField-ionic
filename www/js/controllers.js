angular.module('starter.controllers', ['ionic', 'onezone-datepicker','pascalprecht.translate','starter.services','ionic-modal-select'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$http) {

})



.controller('DashCtrl', function($scope, $ionicModal,$http,$state,$http,WorkingOrders) {
$scope.operacija  = [];
$scope.kultura = [];
$scope.input = [];

  $scope.operacija.push('Berba - kukuruza');
  $scope.operacija.push('Berba - soje');
  $scope.operacija.push('Drljanje');
  $scope.operacija.push('Kombajniranje - pšenice');
  $scope.operacija.push('Kombajniranje - kukuruza');
  $scope.operacija.push('Kultivacija - soje');
  $scope.operacija.push('Međuredno kultiviranje - soje');
  $scope.operacija.push('Oranje - šećerne repe');
  $scope.operacija.push('Međuredno kultiviranje - kukuruza');
  $scope.operacija.push('Oranje - soje');
  $scope.operacija.push('Oranje - šećerne repe');
  $scope.operacija.push('Podrivanje');
  $scope.operacija.push('Predsetvena priprema germinator - šećerna repa');
  $scope.operacija.push('Predsetvena priprema germinator - soja');
  $scope.operacija.push('Prevoz veštaka - kukuruz');
  $scope.operacija.push('Prevoz vode - šećerna repa');
  $scope.operacija.push('Rastur veštaka - kukuruz');
  $scope.operacija.push('Razbijanje pokorice');
  $scope.operacija.push('Setva - soje');
  $scope.operacija.push('Uzgrtanje razi unutar skladista-farma');
  $scope.operacija.push('Oranje do 35 cm');
  $scope.operacija.push('Podrivanje zemljišta');
  $scope.operacija.push('Utovar stajnjaka teleskopskim manipulatorom');
  $scope.operacija.push('Rad germinatorom');
  $scope.operacija.push('Kosidba lucerke i trave');
  $scope.operacija.push('Rad grabuljama - sunce');
  $scope.operacija.push('Transport traktorskim prikolicama');
  $scope.operacija.push('Mašinsko prokopavanje kanala za odbranu od repine pipe');
  $scope.operacija.push('ORANJE 25-30 cm VII');
  $scope.operacija.push('ORANJE 25-30 cm VI');
  $scope.operacija.push('ORANJE 25-30 cm III');
  $scope.operacija.push('ORANJE 20-25 cm III');
  $scope.operacija.push('ORANJE preko 30 cm III');
  $scope.operacija.push('ORANJE preko 30 cm VII');
  $scope.operacija.push('ORANJE preko 30 cm VI');
  $scope.operacija.push('ORANJE preko 30 cm V');
  $scope.operacija.push('RAD SA KIVONOM');
  $scope.operacija.push('RAD SA KENTAUROM');
  $scope.operacija.push('RAD SA ROTOFREZOM I put - bankovanje');
  $scope.operacija.push('KOPANJE KANALA ZA PIPE');
  $scope.operacija.push('RAZORAVANJE LUCERIŠTA ');
  $scope.operacija.push('GARENJE TANJIRAČOM Tara, 3,5 m');
  $scope.operacija.push('TANJIRANJE ORANJA Adut 3 m');


  
  $scope.kultura.push('Žitarice');
  $scope.kultura.push('Industrijsko bilje');
  $scope.kultura.push('Krmno bilje');
  $scope.kultura.push('Aromatično i lekovito bilje');
  $scope.kultura.push('Povrće');
  $scope.kultura.push('Voće i grožđe');
  $scope.kultura.push('Sadni materijal i horti kultura');
  $scope.kultura.push('Neobrađeno zemljište');

  $scope.input.push('1,1-dichloro-2,2-bis(4-ethylphenyl)ethane (F)');
  $scope.input.push('1,2-dibromoethane (ethylene dibromide) (F)');
  $scope.input.push('1,2-dichloroethane (ethylene dichloride) (F)');
  $scope.input.push('1,4-Diaminobutane (aka Putrescine) (++)');
  $scope.input.push('1-Decanol (++)');
  $scope.input.push('2,4,5-T (sum of 2,4,5-T, its salts and esters, expressed as 2,4,5-T) (F)');
  $scope.input.push('2,4-D (sum of 2,4-D, its salts, its esters and its conjugates, expressed as 2,4-D)');
  $scope.input.push('1-Naphthylacetamide');  
  $scope.input.push('Abamectin (sum of avermectin B1a, avermectin B1b and delta-8,9 isomer of avermectin B1a, expressed as avermectin B1a) (F) (R)');
  $scope.input.push('8-hydroxyquinoline (sum of 8-hydroxyquinoline and its salts, expressed as 8-hydroxyquinoline)');
  $scope.input.push('Acetic acid (++)');
  $scope.input.push('Begonia Cascade Yellow  p029 3/1');
  $scope.input.push('Begonia Cascade Scharlet   p030 3/1');
  $scope.input.push('Gloxinia Defiance  p052 1/1');
  $scope.input.push('Ns Suncokret 70 000 zrna Sumo 1 PR');
  $scope.input.push('Bacillomix specijal  100ml');
  $scope.input.push('NS kukuruz 5083+sonido');
  $scope.input.push('KWS krmni sirak Sole');
  $scope.input.push('Cordus75 WG  400gr');
  $scope.input.push('Cleranda+dash(10l cleranda+5l dash)');
  $scope.input.push('Semenski ječam Vannesa 25/1');
  $scope.input.push('UREA  50/1');
  $scope.input.push('Valagro Plantafol 1/1kg 30-10-10      (#12)');
  $scope.input.push('Envidor 100ml');
  $scope.input.push('Funguran 10/1');
  $scope.input.push('START SPREJ');
  $scope.input.push('AGROVISK MHT 15-40');


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
        //console.log('callback');
    }
};

    $scope.createOrder = function(order,callback){
      $scope.orders = WorkingOrders.all();
      var godina = $scope.onezoneDatepicker.date.getFullYear();
      //console.log(godina);

      var mesec = $scope.onezoneDatepicker.date.getMonth();
      var dan = $scope.onezoneDatepicker.date.getDate();
      var datum = godina + '/' + mesec + "/" + dan;
      //console.log(order.operacija + " "+ order.kultura + " " + order.cena + " "+order.input ); 
    $scope.orders.push({
      operacija: order.operacija,
      kultura: order.kultura,
      cena: order.cena,
      input: order.input,
      vreme: datum
    })
       
    $state.go('app.orders');

}

})

.controller('NewReportCtrl', function($scope, $ionicModal,$http,$state,$http,Reports,$ionicHistory,$window  ) {

$scope.katOpst  = [];
$scope.plot = [];
$scope.activity = [];


$scope.katOpst.push('Srbija');
$scope.katOpst.push('Mauricijus');
$scope.katOpst.push('Neoplanta');
$scope.katOpst.push('Adminski');

$scope.plot.push('1');
$scope.plot.push('2');
$scope.plot.push('3');
$scope.plot.push('4');


$scope.activity.push('1');
$scope.activity.push('2');
$scope.activity.push('3');
$scope.activity.push('4');


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
  $scope.order = WorkingOrders.get($stateParams.orderId),$scope.user;
})

.controller('ReportDetailCtrl', function($scope, $stateParams, Reports) {
  $scope.report = Reports.get($stateParams.reportId);
})



.controller('LoginCtrl', function($scope,$cookies, $state,$http,WorkingOrders,$ionicPopup) {



        

        $scope.user = {};
        $scope.korisnik ={};
         // $scope.user.farm= 'SuperAdmin';

         // $scope.user.username= 'Bojan';
         // $scope.user.password= '1243!';
      // console.log($scope.user);
      // calling our submit function.
        $scope.signIn = function() {

        console.log($scope.user);     

        // Posting data to php file
        $http({
          method  : 'POST',
         // withCredentials: true,
          url     : 'http://agrolife.greensoft.co:3000/login',
          data    : $scope.user //forms user object
         })
          .success(function(data) {
            console.log(data);
             $scope.message = data.message;
          
            if (data.success) {
              // Showing errors.
                 var alertPopup = $ionicPopup.alert({
                    title:'Welcome '  + $scope.user.username,
                    template:'Hellooo'
              });
              $state.go('app.orders');
               console.log('cookies:'+ JSON.stringify($cookies.getAll()));
              // console.log('cookies:'+ JSON.stringify($cookies));

              // $http({
              //   method:'POST',
              //   url: 'http://agrolife.greensoft.co:3000/materijal/read'
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