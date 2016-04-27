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
define(['angular', 'require', 'angular-route'], function(angular, require) {
    // 使用严格模式
    'use strict';
    // 定义 angular 模块
    var app = angular.module('myApp', ['ngRoute']);
	app.config(['$routeProvider', '$controllerProvider', '$stateProvider', function($routeProvider, $controllerProvider, $stateProvider){
		var provider = $stateProvider.state('one',{
			url: '/one',
			controller: 'oneController',
			template: '<div>test</div>'
		});
		provider.state('one.num1', {
			url: '/num1',
			views: {
				'one':{
					template: '<div>num1</div>'
				}
			}
		})
		$routeProvider
			.when('/one', {
 			// template: '<div>here is one</div>'
	 			templateUrl: 'view/one.html',
	 			controller: 'oneController',
	            resolve:{
	                delay : ctrlRegister('oneController', ['scripts/controllers/oneController.js'])
	            }
			})
			.when('/two', {
				templateUrl: 'view/two.html',
				controller: 'twoController',
				resolve:{
					delay: ctrlRegister('twoController', ['scripts/controllers/twoController.js'])
				}
			})
			.otherwise({
				redirectTo: '/one'
			});

			// 该函数接受两个参数
			// ctrlName，字符串类型，为该控制器的名字
			// ctrlModule，字符串数组类型，为要引入的控制器的相对地址
			// 调用例如 ctrlRegister('ListCtrl',['controllers/ListCtrl.js'])
			function ctrlRegister (ctrlName, ctrlModule) {
                return function ($q) {
                    var defer = $q.defer();
                    // 加载该控制器，并将返回值赋给controller，返回值一般是一个控制器函数
                    require(ctrlModule, function (controller) {
					// 将返回值注册为名称为ctrlName的控制器
                        $controllerProvider.register(ctrlName, controller);
                        defer.resolve();
                    });
                    // 完成注册
                    return defer.promise;
                }
            }
	}]);
    // 定义 DemoController ， 只定义一个属性 greeting 给界面绑定。
    app.controller('DemoController', ['$scope', function($scope) {
        $scope.greeting = 'Hello, world!';
    }]);
    return app;
});