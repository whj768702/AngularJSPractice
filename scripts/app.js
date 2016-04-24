// var app = angular.module('myApp', ['ngResource','ngRoute']);

// app.controller('MainController', ['$scope',function($scope) {
// }]);
// app.config(function($routeProvider){
// 	$routeProvider
// 		.when('/one', {
// 			// template: '<div>here is one</div>'
// 			templateUrl: 'view/one.html',
// 			controller: 'oneController'
			
// 		})
// 		.when('/two', {
// 			template: '<div>here is two</div>'
// 		})
// 		.otherwise({
// 			redirectTo: '/one'
// 		});
// });


// app.controller('oneController', ['$scope', function($scope){
// 	$scope.message = 'hello, oneController';
// }]);


//define('myApp', [
//	'angular'
//	//,
//	//'ngRoute',
//	//'ngResource'
//], function(angular, ngRoute, ngResource) {
//	'use strict';
//	var app = angular.module('myApp', []);
//
//	//app.config(['$routeProvide'], function($routeProvider){
//	//	$routeProvider
//	//		.when('/one', {
// 	//		// template: '<div>here is one</div>'
// 	//		templateUrl: 'view/one.html'
// 	//		// ,
//	// 			// controller: 'oneController'
//	// 		})
//	// 		.when('/two', {
//	// 			template: '<div>here is two</div>'
//	// 		})
//	// 		.otherwise({
//	// 			redirectTo: '/one'
//	// 		});
//	//});
//	app.controller('testControl', ['$scope', function($scope){
//		$scope.test = 'hello world';
//	}]);
//	return app;
//});
define('app', ['angular'], function(angular) {
    // 使用严格模式
    'use strict';
    // 定义 angular 模块
    var app = angular.module('myApp', []);
	//app.config(['$routeProvide', function($routeProvider){
	//	$routeProvider
	//		.when('/one', {
 	//		// template: '<div>here is one</div>'
 	//		templateUrl: 'view/one.html'
 	//		// ,
	// 			// controller: 'oneController'
	// 		})
	// 		.when('/two', {
	// 			template: '<div>here is two</div>'
	// 		})
	// 		.otherwise({
	// 			redirectTo: '/one'
	// 		});
	//}]);
    // 定义 DemoController ， 只定义一个属性 greeting 给界面绑定。
    app.controller('DemoController', ['$scope', function($scope) {
        $scope.greeting = 'Hello, world!';
    }]);
    return app;
});