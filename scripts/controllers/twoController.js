define(['angular'], function (angular) {
	'use strict';
	
    //将本控制器函数作为结果返回给router.js
    function twoController($scope){
        $scope.message = 'hello, twoController';
		$scope.values = {'name': 'misko', 'gender': 'male'};
		$scope.log = [];
		$scope.obj = [];
		$scope.test = angular.forEach($scope.values, function(value, key, obj) {
			this.push(key + ': ' + value);
		}, $scope.log);

		console.log($scope.values);
		console.log($scope.log);
		console.log($scope.test);

    };

    return twoController;
});