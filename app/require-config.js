'use strict';
if(window.__karma__) {
	var allTestFiles = [];
	var TEST_REGEXP = /spec\.js$/;

	var pathToModule = function(path) {
		return path.replace(/^\/base\/app\//, '').replace(/\.js$/, '');
	};

	Object.keys(window.__karma__.files).forEach(function(file) {
		if (TEST_REGEXP.test(file)) {
			// Normalize paths to RequireJS module names.
			allTestFiles.push(pathToModule(file));
		}
	});
}
require.config({
	paths: {
		angular: 'bower_components/angular/angular',
		angularRoute: 'bower_components/angular-route/angular-route',
		angularMocks: 'bower_components/angular-mocks/angular-mocks',
		text: 'bower_components/requirejs-text/text',
                knockout: 'bower_components/knockout/knockout-3.3.0',
		jquery: 'bower_components/jquery/jquery-2.1.3.min',
		jqueryui: 'bower_components/jquery-ui/jquery-ui.min',
                'jqueryui-amd': 'bower_components/jquery/jqueryui-amd-1.11.4.min',
                promise: 'bower_components/es6-promise/promise-1.0.0.min',
                hammerjs: 'bower_components/hammer/hammer-2.0.4.min',
                ojdnd: 'libs/dnd-polyfill/dnd-polyfill-1.0.0.min',
                ojs: 'bower_components/oj/v1.1.2/debug',
                ojL10n: 'bower_components/oj/v1.1.2/ojL10n',
                ojtranslations: 'bower_components/oj/v1.1.2/resources',
                signals: 'bower_components/js-signals/signals.min',
	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularRoute': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		},
                'jquery': {
                    exports: ['jQuery', '$']
                }
	},
	priority: [
		"angular"
	],
	deps: window.__karma__ ? allTestFiles : [],
	callback: window.__karma__ ? window.__karma__.start : null,
	baseUrl: window.__karma__ ? '/base/app' : '',
});
require([
	'angular',
	'app',
        'ojs/ojcore',
        'jquery',
        'ojs/ojrouter',
        'ojs/ojknockout',
        'ojs/ojbutton',
        'ojs/ojtoolbar',
        'ojs/ojmenu',
        'ojs/ojmodule'
	], function(angular, app) {
		var $html = angular.element(document.getElementsByTagName('html')[0]);
		angular.element().ready(function() {
			// bootstrap the app manually
			angular.bootstrap(document, ['myApp']);
		});
	}
);