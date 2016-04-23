require.config({
	paths: {
		angular: 'bower_components/angular/angular',
		ngRoute: 'bower_components/angular-route/angular-route',
		// angularMocks: 'bower_components/angular-mocks/angular-mocks',
		ngResource: 'bower_components/angular-resource/angular-resource'
		// text: 'bower_components/requirejs-text/text'
	},
	shim: {
		'angular': {'exports' : 'angular'},
		'ngResource': { exports: 'ngResource', deps: ['angular'] },
		'ngRoute': { exports: 'ngRoute', deps: ['angular'] }
		// 'angularMocks': {
		// 	deps:['angular'],
		// 	'exports':'angular.mock'
		// }
	},
	priority: [
		"angular"
	],
	// deps: window.__karma__ ? allTestFiles : [],
	// callback: window.__karma__ ? window.__karma__.start : null,
	baseUrl: 'scripts/'
});

require([
	'angular',
	'app'
	], function(angular, app) {
		var $html = angular.element(document.getElementsByTagName('html')[0]);
		angular.element().ready(function() {
			// bootstrap the app manually
			angular.bootstrap(document, ['myApp']);
		});
	}
);