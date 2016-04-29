define(['./myDirectives'], function(directiveModule){
	'use strict';

	directiveModule.directive('oneDirective', function(){
		return {
			restrict: 'AE',
			replace: true,
			template: '<div>oneDirective</div>'
		}
	});

	return directiveModule;
});