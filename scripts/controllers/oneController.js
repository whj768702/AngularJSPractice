
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
    function oneController($scope){
        $scope.message = 'hello, oneController';
        $scope.src = {
        	a: 'A',
        	b: 'B',
        	c: {
        		d: 'D',
        		e: {
        			f: 'F'
        		}
        	}
        };
        $scope.src2 = {
        	c: {
        		src2: 'D',
        		e: {
        			src2: 'src2',
        			f: 'F'
        		}
        	}
        };
        $scope.dest = {
        	A: 'a'
        };
        $scope.temp = angular.extend($scope.dest, $scope.src, $scope.src2);
        // $scope.temp = angular.merge($scope.dest, $scope.src, $scope.src2);
        $scope.change = function(){
        	$scope.temp.A = 'changed';
        }
    };

    return oneController;
});