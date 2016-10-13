define(['angular'], function (angular) {
	'use strict';
	
    //将本控制器函数作为结果返回给router.js
    return function twoController($scope){
        $scope.message = 'hello, twoController';
    };
});