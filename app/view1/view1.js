'use strict';
define([
    'angular',
    'angularRoute',
    'ojs/ojcore',
    'knockout',
    'jquery',
    'jqueryui',
    'ojs/ojknockout',
    'ojs/ojgauge',
    'ojs/ojinputnumber'
], function (angular) {
    angular.module('myApp.view1', ['ngRoute'])
            .config(['$routeProvider', function ($routeProvider) {
                    $routeProvider.when('/view1', {
                        templateUrl: 'view1/view1.html',
                        controller: 'View1Ctrl'
                    });
                }])
.controller('View1Ctrl', function () {
    $('#gaugeInput').ojInputNumber({
        min: 0, 
        max: 100, 
        value: 50,
        step: 10, 
        readonly: true,
        optionChange: function (e, data) {
            if (data.option == "value") {
                $("#gauge").ojStatusMeterGauge({
                    value: 63, min: 0, max: 100, 
                    thresholds: [{min: 33}, {max: 67}, {}],
                });
                $("#gauge").ojStatusMeterGauge('option', 'value', data['value']);
                $("#gauge").ojStatusMeterGauge('refresh');
                console.log('New value from input:' + data['value']);
            }
        }
    });
    $('#gauge').ojStatusMeterGauge({
        title: "Value: 20<br>Reference Lines: Low 33, Medium 67, High 100",
        min: 0, 
        max: 100, 
        value: 50,  
        orientation: 'circular',
        metricLabel: {rendered: 'on'},
        plotArea: {rendered: 'on'},
        referenceLines: [{value: 33, color:'red'}, {value: 67, color:'green'}],
        indicatorSize: 0.5, 
        readOnly: false,
        optionChange: function (e, data) {
            if (data.option == "value") {
                $("#gaugeInput").attr('value', data['value']);
                console.log('New value from gauge:' + data['value']);
            }
        }
    });
})
            .directive('hboTabs', function () {
                return {
                    restrict: 'A',
                    link: function (scope, elm, attrs) {
                        var jqueryElm = $(elm[0]);
                        $(jqueryElm).tabs();
                    }
                };
            });
});

