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