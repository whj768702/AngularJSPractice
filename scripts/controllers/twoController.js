define(['angular'], function (angular) {
	'use strict';
	
    //将本控制器函数作为结果返回给router.js
    function twoController($scope){
        $scope.message = 'hello, twoController';
    };

    return twoController;
});