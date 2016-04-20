var app = angular.module('myApp', ['ngResource','ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/one', {
			template: '<div>here is one</div>'
		})
		.when('/two', {
			template: '<div>here is two</div>'
		})
		.otherwise({
			redirectTo: '/one'
		});
});
