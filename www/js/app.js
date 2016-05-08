// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','pascalprecht.translate'])



.run(function($ionicPlatform,DB) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    DB.init();

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})




  
.config(function($stateProvider, $urlRouterProvider,$translateProvider) {
  $translateProvider.translations('en',{
    loginTitle : 'Login',
    usernameLabel : 'Username',
    organisationLabel:'Organisation',
    passwordLabel: 'Password',
    loginBtn : 'Login',
    forgotpasswordLabel: 'Forgot your password?',
    operationLabel: 'Operation',
    inputLabel: 'Input',
    cultureLabel: 'Culture',
    priceLabel: 'Price',
    dateLabel: 'Date',
    saveLabel: 'Save',
    orderLabel: 'Working Orders',
    orderAll: 'All Orders',
    newOrderLabel: 'New work order',
    settingsLabel: 'Settings',
    logOutLabel: 'Log Out',
    listOfOrdersLabel: 'List of work orders',
    searchOrdersLabel: 'Search orders',
    searchOrders1Label: 'Search reports',

    timeLabel: 'Time',
    notificationsLabel: 'Notifications',
    showOnMapLabel:'Show on map',
    nameLabel: 'Name',
    enterNameLabel: 'Enter name',
    descriptionLabel: 'Description',
    enterDescriptionLabel: 'Enter description',
    createLabel: 'Create',
    cancelLabel:'Cancel',
    needHelpLabel: 'Need help?',
    addItemLabel: 'Add Item',
    createItemLabel:'Create Item',
    editingLabel: 'Editing',
    newOrder:'New working order',
    newReportLabel:'New report',
    reportLabel: 'Reports',
    reportAll: 'All Reports',
    "prognoza": "Weather forecast",

    "katOpst": "Cadastral region",
    "vrstaAktivnosti" : "Type of activity",
    "parcela" : "Parcel",
    "opis" : "Description",
    "listaR" : "Field report List",
    "sortby" : "Sort by",
    "vreme" : "Time",
    "naziv" : "Name",
    "menu" : "Menu",
    "tipAktivnosti" : "Type of activity",
    "datumPosete" : "Date of visit",
    "en" : "English",
    "rs" : "Serbian",
    "lang" : "Choose language",
    "mera" : "Unit",
    "cel" : "Metric (Celsius)",
    "far" : "Imperial (Fahrenheit)",
    "favorit" : "Favorites",
    "podesavanja":"Settings",
    "editOrder" : "Edit Working Order"



  });
  $translateProvider.translations('rs',{
    loginTitle:'Prijavi se',
    usernameLabel:'Korisnicko ime',
    organisationLabel: 'Organizacija',
    passwordLabel:'Lozinka',
    loginBtn: 'Prijavi se',
    forgotpasswordLabel: 'Zaboravili ste sifru?',
    operationLabel: 'Operacija',
    inputLabel: 'Input',
    cultureLabel: 'Kultura',
    priceLabel: 'Cena',
    dateLabel: 'Datum',
    saveLabel: 'Sačuvaj',
    orderLabel: 'Radni Nalozi',
    orderAll: 'Svi nalozi',

    newOrderLabel: 'Novi radni nalog',
    settingsLabel: 'Podešavanja',
    logOutLabel:'Odjavi se',
    listOfOrdersLabel:'Lista radnih naloga',
    searchOrdersLabel: 'Pretraži naloge',
    searchOrders1Label: 'Pretraži beleške',

    timeLabel:'Vreme',
    notificationsLabel: 'Obaveštenja',
    showOnMapLabel:'Prikaži na mapi',
    nameLabel:'Naziv',
    enterNameLabel: 'Unesi naziv',   
    descriptionLabel: 'Opis',
    enterDescriptionLabel: 'Unesi opis',
    createLabel: 'Dodaj',
    cancelLabel: 'Odustani',
    needHelpLabel: 'Pomoc?',
    addItemLabel: 'Dodaj stavku',
    createItemLabel:'Kreiraj stavku',
    editingLabel: 'Izmena',
    newOrder: 'Novi radni nalog',
    newReportLabel:'Nova beleška',
    reportLabel: 'Beleška',
    reportAll: 'Sve beleške',
    "prognoza": "Vremenska Prognoza",
    "katOpst" : "Katastarska opstina",
    "vrstaAktivnosti": "Vrsta aktivnosti",
    "parcela" : "Parcela",
    "opis" : "Opis",
    "listaR" : "Lista terenskih beleški",
    "sortby" : "Sortiraj po",
    "vreme" : "Vremenu",
    "naziv" : "Nazivu",
    "menu" : "Meni",
    "tipAktivnosti" : "Tip aktivnosti",
    "datumPosete" : "Datum posete",
    "en" : "Engleski",
    "rs" : "Srpski",
    "lang" : "Izaberite jezik",
    "mera" : "Jedinična mera",
    "cel" : "Celzijus",
    "far" : "Farenhajt",
    "favorit" : "Favorit",
    "podesavanja" : "Podešavanja",
    "editOrder" : "Izmena radnog naloga"






  });
  $translateProvider.preferredLanguage('en');
  $translateProvider.fallbackLanguage('en');


  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive


 .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      cache: false,

      controller: 'LoginCtrl'
    })

  .state('forgotpassword', {
      url: '/forgot-password',
      templateUrl: 'templates/forgot-password.html',
      controller:'ForgotPassCtrl'
    })
 
  
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })



 .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.newOrder', {
    url: '/newOrder',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-new-order.html',
        controller: 'DashCtrl'

      }
    }
  })

  .state('app.editOrder', {
    url: '/editOrder',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-new-order-edit.html',
        controller: 'EditOrderCtrl'

      }
    }
  })

  // .state('tab.newWorkingOrder', {
  //   url: '/newWorkingOrder',
  //   views: {
  //     'tab-newWorkingOrder': {
  //       templateUrl: 'templates/tab-new-order.html',
  //       controller: 'DashCtrl'
  //     }
  //   }
  // })


 .state('app.weather-search', {
      url: '/weather-search',
      views: {
        'menuContent': {
          templateUrl: 'templates/weather-search.html',
          controller: 'WeatherSearchCtrl'
        }
      }
    })
  //  .state('tab.weather-search', {
  //   url: '/weather-search',
  //   views: {
  //     'tab-weather-search': {
  //       templateUrl: 'templates/weather-search.html',
  //       controller: 'WeatherSearchCtrl'
  //     }
  //   }
  // })

    .state('app.weather', {
      url: '/weather/:city/:lat/:lng',
      views: {
        'menuContent': {
          templateUrl: 'templates/weather.html',
          controller: 'WeatherController'
        }
      }
    })
  // .state('weather', {
  //     url: '/weather/:city/:lat/:lng',
  //     controller: 'WeatherController',
  //     templateUrl: 'templates/weather.html'
  //   })
  .state('app.orders', {
      url: '/orders',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-orders.html',
          controller: 'ChatsCtrl'

        }
      }
    })


  // .state('tab.orders', {
  //     url: '/orders',
  //     views: {
  //       'tab-orders': {
  //         templateUrl: 'templates/tab-orders.html',
  //         controller: 'ChatsCtrl'
  //       }
  //     }
  //   })


    .state('app.reports', {
      url: '/reports',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-report.html',
          controller: 'ReportsCtrl'
        }
      }
    })
   // .state('tab.reports', {
   //    url: '/reports',
   //    views: {
   //      'tab-reports': {
   //        templateUrl: 'templates/tab-report.html',
   //        controller: 'ReportsCtrl'
   //      }
   //    }
   //  })

    .state('app.newReport', {
      url: '/newReport',
      views: {
        'menuContent': {
          cache: false,

          templateUrl: 'templates/tab-new-report.html',
          controller: 'NewReportCtrl'
        }
      }
    })
  //  .state('tab.newReport', {
  //   url: '/newReport',
  //   views: {
  //     'tab-newReport': {
  //       templateUrl: 'templates/tab-new-report.html',
  //       controller: 'DashCtrl'
  //     }
  //   }
  // })


    .state('app.report-detail', {
      url: '/reports/:reportId',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-detailR.html',
          controller: 'ReportDetailCtrl'
        }
      }
    })
    // .state('tab.report-detail', {
    //   url: '/reports/:reportId',
    //   views: {
    //     'tab-reports': {
    //       templateUrl: 'templates/tab-detailR.html',
    //       controller: 'ReportDetailCtrl'
    //     }
    //   }
    // })


  .state('app.order-detail', {
      url: '/orders/:orderId',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
    // .state('tab.order-detail', {
    //   url: '/orders/:orderId',
    //   views: {
    //     'tab-orders': {
    //       templateUrl: 'templates/tab-detail.html',
    //       controller: 'ChatDetailCtrl'
    //     }
    //   }
    // })
   .state('app.settings', {
        url: '/settings',
        views: {
          'menuContent': {
            templateUrl: 'templates/tab-settings.html',
            controller: 'SettingsCtrl'
          }
        }
      })

  //     .state('tab.account', {
  //   url: '/account',
  //   views: {
  //     'tab-account': {
  //       templateUrl: 'templates/tab-settings.html',
  //       controller: 'SettingsCtrl'
  //     }
  //   }
  // });
   ///////////////////////////////////////////////
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-settings.html',
          controller: 'PlaylistsCtrl'
        }
      }
    });
  // Each tab has its own nav history stack:



  //  .state('tab.weather-search', {
  //   url: '/weather-search',
  //   views: {
  //     'tab-weather-search': {
  //       templateUrl: 'templates/weather-search.html',
  //       controller: 'WeatherSearchCtrl'
  //     }
  //   }
  // });
 

  // .state('tab.account', {
  //   url: '/account',
  //   views: {
  //     'tab-account': {
  //       templateUrl: 'templates/tab-settings.html',
  //       controller: 'SettingsCtrl'
  //     }
  //   }
  // });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/orders');

})




//za prognozu

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('LeftMenuController', function ($scope, Locations) {
  $scope.locations = Locations.data;





})

.filter('timezone', function () {
  return function (input, timezone) {
    if (input && timezone) {
      //var time = moment.tz(input * 1000, timezone);
      //return time.format('LT');
      console.log('s');
    }
    return '';
  };
})

.filter('chance', function () {
  return function (chance) {
    if (chance) {
      var value = Math.round(chance * 10);
      return value * 10;
    }
    return 0;
  };
})

.filter('icons', function () {
  var map = {
    'clear-day': 'ion-ios-sunny',
    'clear-night': 'ion-ios-moon',
    rain: 'ion-ios-rainy',
    snow: 'ion-ios-snowy',
    sleet: 'ion-ios-rainy',
    wind: 'ion-ios-flag',
    fog: 'ion-ios-cloud',
    cloudy: 'ion-ios-cloudy',
    'partly-cloudy-day': 'ion-ios-partlysunny',
    'partly-cloudy-night': 'ion-ios-cloudy-night'
  };
  return function (icon) {
    return map[icon] || '';
  }
})

.factory('Settings', function () {
  var Settings = {
    units: 'us',
    days: 8
  };
  return Settings;
})

.factory('Locations', function ($ionicPopup) {
  var Locations = {
    data: [{
      city: 'Novi Sad,Serbia',
      lat: 45.2671352,
      lng: 19.8335496
    }],
    getIndex: function (item) {
      var index = -1;
      angular.forEach(Locations.data, function (location, i) {
        if (item.lat == location.lat && item.lng == location.lng) {
          index = i;
        }
      });
      return index;
    },
    toggle: function (item) {
      var index = Locations.getIndex(item);
      if (index >= 0) {
        $ionicPopup.confirm({
          title: 'Are you sure?',
          template: 'This will remove ' + Locations.data[index].city
        }).then(function (res) {
          if (res) {
            Locations.data.splice(index, 1);
          }
        });
      } else {
        Locations.data.push(item);
        $ionicPopup.alert({
          title: 'Location saved'
        });
      }
    },
    primary: function (item) {
      var index = Locations.getIndex(item);
      if (index >= 0) {
        Locations.data.splice(index, 1);
        Locations.data.splice(0, 0, item);
      } else {
        Locations.data.unshift(item);
      }
    }
  };

  return Locations;
});
