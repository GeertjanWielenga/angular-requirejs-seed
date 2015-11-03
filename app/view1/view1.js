'use strict';
define([
	'angular',
	'angularRoute',
        'jquery'
], function(angular) {
	angular.module('myApp.view1', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/view1', {
			templateUrl: 'view1/view1.html',
			controller: 'View1Ctrl'
		});
	}])
	.controller('View1Ctrl', [function() {
            $("p").click(function(){
                $(this).hide();
            });
	}]);
});

