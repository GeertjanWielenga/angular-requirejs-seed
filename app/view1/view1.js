'use strict';
define([
	'angular',
	'angularRoute',
        'jquery',
        'jqueryui'
], function(angular) {
	angular.module('myApp.view1', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/view1', {
			templateUrl: 'view1/view1.html',
			controller: 'View1Ctrl'
		});
	}])
	.controller('View1Ctrl', [function() {
            $('#myDatepicker').datepicker({
                onSelect: function (dateText, inst) {
                    $("input[name='mydate']").val(dateText);
                }
            });
	}]);
});

