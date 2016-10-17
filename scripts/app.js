// define(['angular', 'require', 'angular-route', 'angular-ui-route'], function(angular, require) {
//     // 使用严格模式
//     'use strict';
//     // 定义 angular 模块
//     var app = angular.module('myApp', ['ngRoute','ui.router']);
// 	app.config(['$routeProvider', '$controllerProvider', '$stateProvider', function($routeProvider, $controllerProvider, $stateProvider){
// 		var provider = $stateProvider.state('one', {
// 			abstract: false,
// 			url: '/one',
// 			// controller: 'oneController',
// 			// template: '<div>one</div>',
// 			// resolve: {
// 			// 	delay: ctrlRegister('oneController', ['scripts/controllers/oneController.js'])
// 			// },
// 			views: {
// 				'': {
// 					controller: 'oneController',
// 					templateUrl: 'view/one.html',
// 					resolve: {
// 						delay: ctrlRegister('oneController', ['scripts/controllers/oneController.js'])
// 					}},
// 				'num1': {
// 					url: '/num1',
// 					// template: '<div>num1</div>'
// 					controller: 'oneController',
// 					templateUrl: 'view/num1.html'
// 				},
// 				'num2': {
// 					url: '/num2',
// 					// template: '<div>num2</div>'
//
// 					templateUrl: 'view/num2.html'
// 				}
// 			}
// 		}).state('two', {
// 			url: '/two',
// 			controller: 'twoController',
// 			// template: '<div>two</div>',
// 			templateUrl: 'view/two.html',
// 			resolve: {
// 				delay: ctrlRegister('twoController', ['scripts/controllers/twoController.js'])
// 			}
// 		});
// 		// provider.state('num1', {
// 		// 	views: {
// 		// 		'num1': {
// 		// 			url: '/num1',
// 		// 			template: '<div>num1</div>'
// 		// 		}
// 		// 	}
// 		// }).state('num2', {
// 		// 	views: {
// 		// 		'num2': {
// 		// 			url: '/num2',
// 		// 			template: '<div>num2</div>'
// 		// 		}
// 		// 	}
// 		// });
//
// 		// $routeProvider
// 		// 	.when('/one', {
//  	// 		// template: '<div>here is one</div>'
// 	 // 			templateUrl: 'view/one.html',
// 	 // 			controller: 'oneController',
// 	 //            resolve:{
// 	 //                delay : ctrlRegister('oneController', ['scripts/controllers/oneController.js'])
// 	 //            }
// 		// 	})
// 		// 	.when('/two', {
// 		// 		templateUrl: 'view/two.html',
// 		// 		controller: 'twoController',
// 		// 		resolve:{
// 		// 			delay: ctrlRegister('twoController', ['scripts/controllers/twoController.js'])
// 		// 		}
// 		// 	})
// 		// 	.otherwise({
// 		// 		redirectTo: '/one'
// 		// 	});
//
// 			// 该函数接受两个参数
// 			// ctrlName，字符串类型，为该控制器的名字
// 			// ctrlModule，字符串数组类型，为要引入的控制器的相对地址
// 			// 调用例如 ctrlRegister('ListCtrl',['controllers/ListCtrl.js'])
// 			function ctrlRegister (ctrlName, ctrlModule) {
//                 return function ($q) {
//                     var defer = $q.defer();
//                     // 加载该控制器，并将返回值赋给controller，返回值一般是一个控制器函数
//                     require(ctrlModule, function (controller) {
// 					// 将返回值注册为名称为ctrlName的控制器
//                         $controllerProvider.register(ctrlName, controller);
//                         defer.resolve();
//                     });
//                     // 完成注册
//                     return defer.promise;
//                 }
//             }
// 	}]);
//     // 定义 DemoController ， 只定义一个属性 greeting 给界面绑定。
//     app.controller('DemoController', ['$scope', function($scope) {
//         $scope.greeting = 'Hello, world!';
//     }]);
//
// 	app.directive('helloWorld', function(){
// 		return {
// 			template: "<h1>hello world</h1>"
// 		}
// 	});
//     return app;
// });



define([
    'angular',
    'angular-route',
    'ui.router',
    // './controllers/index',
    // './routes/index'
    // './directives/index',
    // './filters/index',
    // './services/index'
], function(angular){
    'use strict';
    var app = angular.module('app', ['ui.router', 'myController', 'myRoute']);
    // return angular.module('app', ['app.services', 'app.controllers', 'app.filters', 'app.directives']);
    // return angular.module('appW', ['appW.controller']);
    return app;
});