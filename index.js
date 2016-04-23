var app = angular.module('myApp', ['ngResource','ngRoute']);

// app.controller('MainController', ['$scope',function($scope) {
// }]);
app.config(function($routeProvider){
	$routeProvider
		.when('/one', {
			// template: '<div>here is one</div>'
			templateUrl: 'view/one.html',
			controller: 'oneController'
			
		})
		.when('/two', {
			template: '<div>here is two</div>'
		})
		.otherwise({
			redirectTo: '/one'
		});
});


// app.controller('oneController', ['$scope', function($scope){
// 	$scope.message = 'hello, oneController';
// }]);