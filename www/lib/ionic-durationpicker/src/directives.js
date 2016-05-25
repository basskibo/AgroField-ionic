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
