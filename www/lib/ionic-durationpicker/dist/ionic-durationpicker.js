(function() {
		'use strict';
		angular
				.module("ionic-durationpicker.templates", [])
				.run(cacheTemplates);

		cacheTemplates.$inject = ["$templateCache"];

		function cacheTemplates($templateCache) {
				$templateCache.put("idp-item.html","<ion-item ng-class=getItemClasses()><i ng-if=idpLabelIcon class=\"icon {{idpLabelIcon}}\"></i><div ng-bind-html=idpLabel></div><button class=button type=button ng-class=getInputButtonType() ng-click=showPopup()>{{prettyFormatDuration()}}</button></ion-item>");

				$templateCache.put("popup-minutes-seconds.html","<div class=row><span class=\"idp-control col col-offset-20 col-25\"><button type=button class=\"button button-clear button-small idp-control-arrow\" ng-click=\"increment(\'minutes\')\" on-hold=\"updateOnHold(\'minutes\', \'increment\')\" on-release=releaseHold()><i class=\"icon ion-chevron-up\"></i></button><div ng-bind=popupDuration.minutes class=idp-unit-box></div><button type=button class=\"button button-clear button-small idp-control-arrow\" ng-click=\"decrement(\'minutes\')\" on-hold=\"updateOnHold(\'minutes\', \'decrement\')\" on-release=releaseHold()><i class=\"icon ion-chevron-down\"></i></button></span> <label class=\"col col-10 idp-unit-separator\">:</label> <span class=\"idp-control col col-25\"><button type=button class=\"button button-clear button-small idp-control-arrow\" ng-click=\"increment(\'seconds\')\" on-hold=\"updateOnHold(\'seconds\', \'increment\')\" on-release=releaseHold()><i class=\"icon ion-chevron-up\"></i></button><div ng-bind=popupDuration.seconds class=idp-unit-box></div><button type=button class=\"button button-clear button-small idp-control-arrow\" ng-click=\"decrement(\'seconds\')\" on-hold=\"updateOnHold(\'seconds\', \'decrement\')\" on-release=releaseHold()><i class=\"icon ion-chevron-down\"></i></button></span></div>");
		}
})();
(function() {
    'use strict';

    angular
        .module('ionic-durationpicker', [
            'ionic',
            'ionic-durationpicker.templates'
        ]);
})();

(function() {
    'use strict';

    angular
        .module('ionic-durationpicker')
        .directive('ionicDurationpicker', ionicDurationpicker);

    ionicDurationpicker.$inject = ['$interval', '$ionicPopup'];

    function ionicDurationpicker($interval ,$ionicPopup) {
        var directive = {
            restrict: 'E',
            templateUrl: 'idp-item.html',
            scope: {
                idpConfig: '=',
                idpLabel: '@',
                idpLabelIcon: '@',
                idpOutput: '='
            },
            link: linkFunc
        };

        return directive;

        //////////////////////////////////////////////////

        function linkFunc(scope, el, attr) {
            // Initialize Variables
            if (typeof scope.idpConfig === 'undefined' || scope.idpConfig === null) {
                scope.idpConfig = {};
            }
            if (typeof scope.idpLabel === 'undefined' || scope.idpLabel === null) {
                scope.idpLabel = 'Duration';
            }
            if (typeof scope.idpLabelIcon === 'undefined' || scope.idpLabel === null) {
                scope.idpLabelIcon = false;
            }
            if (typeof scope.idpOutput === 'undefined' || scope.idpOutput === null) {
                scope.idpOutput = 0;
            }

            var dateObject, popupButton, onHoldPromise;

            // Default configuration:
            var config = {
                rtl: scope.idpConfig.rtl ? scope.idpConfig.rtl : false,
                inputButtonType: scope.idpConfig.inputButtonType ? scope.idpConfig.inputButtonType : 'button-outline button-positive',
                format: scope.idpConfig.format ? scope.idpConfig.format : 'MM:SS',
                secondsStep: scope.idpConfig.secondsStep ? scope.idpConfig.secondsStep : 1,
                minutesStep: scope.idpConfig.minutesStep ? scope.idpConfig.minutesStep : 1,
                popupTitle: scope.idpConfig.popupTitle ? scope.idpConfig.popupTitle : 'Duration Picker',
                popupSubTitle: scope.idpConfig.popupSubTitle ? scope.idpConfig.popupSubTitle : 'Enter duration',
                popupSaveLabel: scope.idpConfig.popupSaveLabel ? scope.idpConfig.popupSaveLabel : 'Save',
                popupSaveButtonType: scope.idpConfig.popupSaveButtonType ? scope.idpConfig.popupSaveButtonType : 'button-positive',
                popupCancelLabel: scope.idpConfig.popupCancelLabel ? scope.idpConfig.popupCancelLabel : 'Cancel',
                popupCancelButtonType: scope.idpConfig.popupCancelButtonType ? scope.idpConfig.popupCancelButtonType : 'button-stable'
            };

            scope.showPopup = _showPopup;
            scope.getItemClasses = _getItemClasses;
            scope.getInputButtonType = _getInputButtonType;
            scope.increment = _increment;
            scope.decrement = _decrement;
            scope.updateOnHold = _updateOnHold;
            scope.releaseHold = _releaseHold;
            scope.prettyFormatDuration = _prettyFormatDuration;

            _initialize();

            //////////////////////////////////////////////////

            function _initialize() {
                dateObject = new Date(scope.idpOutput * 1000);

                scope.duration = {
                    minutes: __prettyFormatUnit(dateObject.getUTCMinutes()),
                    seconds: __prettyFormatUnit(dateObject.getUTCSeconds())
                };

                scope.popupDuration = angular.copy(scope.duration);
            }

            function _increment(unit) {
                var step = config[(unit + 'Step')];
                scope.popupDuration[unit] = parseInt(scope.popupDuration[unit]);
                scope.popupDuration[unit] = (scope.popupDuration[unit] + step) % 60;
                scope.popupDuration[unit] = __prettyFormatUnit(scope.popupDuration[unit]);
            }

            function _decrement(unit) {
                var step = config[(unit + 'Step')];
                scope.popupDuration[unit] = parseInt(scope.popupDuration[unit]);
                scope.popupDuration[unit] = (scope.popupDuration[unit] + (60 - step)) % 60;
                scope.popupDuration[unit] = __prettyFormatUnit(scope.popupDuration[unit]);
            }

            function _updateOnHold(unit, action) {
                onHoldPromise = $interval(function() {
                    if (action === 'increment') {
                        _increment(unit);
                    } else if (action === 'decrement') {
                        _decrement(unit);
                    }
                }, 100);
            }

            function _releaseHold() {
                $interval.cancel(onHoldPromise);
            }

            function _showPopup() {
                var templateFileName;
                switch (config.format) {
                    case 'MM:SS':
                        templateFileName = 'popup-minutes-seconds.html';
                        break;
                    default:
                        templateFileName = 'popup-minutes-seconds.html';
                        break;
                }

                $ionicPopup.show({
                    templateUrl: templateFileName,
                    title: config.popupTitle,
                    subTitle: config.popupSubTitle,
                    scope: scope,
                    buttons: [
                        {
                            text: config.popupCancelLabel,
                            type: config.popupCancelButtonType,
                            onTap: _initialize
                        },
                        {
                            text: config.popupSaveLabel,
                            type: config.popupSaveButtonType,
                            onTap: __getDurationInSeconds
                        }
                    ]
                });
            }

            function _getItemClasses() {
                var itemClasses = '';

                // Don't forget a white-space after each appended class
                if (config.rtl) {
                    itemClasses += 'idp-dir-rtl item-button-left ';
                } else {
                    itemClasses += 'item-button-right ';
                }

                if (scope.idpLabelIcon && config.rtl) {
                    itemClasses += 'item-icon-right ';
                } else if (scope.idpLabelIcon) {
                    itemClasses += 'item-icon-left ';
                }

                return itemClasses;
            }

            function _getInputButtonType() {
                return config.inputButtonType;
            }

            function _prettyFormatDuration() {
                var formattedMinutes = __prettyFormatUnit(scope.duration.minutes);
                var formattedSeconds = __prettyFormatUnit(scope.duration.seconds);
                return  formattedMinutes + ':' + formattedSeconds;
            }

            function __getDurationInSeconds() {
                scope.duration = angular.copy(scope.popupDuration);
                scope.idpOutput = parseInt(scope.duration.minutes * 60) + parseInt(scope.duration.seconds);
            }

            function __prettyFormatUnit(value) {
                var intValue = parseInt(value);
                return (intValue < 10) ? ('0' + intValue) : intValue;
            }
        }
    }
})();

(function (doc, cssText) {
    var styleEl = doc.createElement("style");
    doc.getElementsByTagName("head")[0].appendChild(styleEl);
    if (styleEl.styleSheet) {
        if (!styleEl.styleSheet.disabled) {
            styleEl.styleSheet.cssText = cssText;
        }
    } else {
        try {
            styleEl.innerHTML = cssText;
        } catch (ignore) {
            styleEl.innerText = cssText;
        }
    }
}(document, ".idp-control {\n" +
"  min-width: 52px;\n" +
"  min-height: 37px;\n" +
"  text-align: center;\n" +
"  font-size: 20px;\n" +
"  line-height: 32px;\n" +
"}\n" +
"\n" +
".idp-control-arrow {\n" +
"  width: 100%;\n" +
"}\n" +
"\n" +
".idp-control-arrow > .icon::before {\n" +
"  margin-top: 6px;\n" +
"  vertical-align: middle;\n" +
"}\n" +
"\n" +
".idp-unit-box {\n" +
"  border: 1px solid #dddddd;\n" +
"}\n" +
"\n" +
".idp-unit-separator {\n" +
"  padding-top: 44px !important;\n" +
"  font-weight: bold;\n" +
"  text-align: center;\n" +
"}\n" +
"\n" +
".idp-dir-rtl {\n" +
"  direction: rtl !important;\n" +
"}"));
