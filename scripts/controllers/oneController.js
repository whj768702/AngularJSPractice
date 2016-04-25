
//多个module，如果同名，新的module会覆盖老的module。
// var app = angular.module('myApp', []);
// define(['app'], function(app){
// 	'use strict'

// 	app.controller('oneController', ['$scope', function($scope){
// 		$scope.message = 'hello, oneController';
// 	}]);
// });

define(['angular'], function (angular) {
	'use strict'
    //将本控制器函数作为结果返回给router.js
    return function oneController($scope){
        $scope.message = 'hello, oneController';
    };
});