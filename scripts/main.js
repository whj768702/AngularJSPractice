
// requirejs.config({
// 	// 所有脚本的跟目录， 相对于 html
// 	baseUrl: 'scripts',
// 	paths: {
// 		// angular 脚本的路径， 相对于 baseUrl
// 		'angular': '../bower_components/angular/angular',
// 		'angular-route': '../bower_components/angular-route/angular-route',
// 		'angular-ui-route': '../bower_components/angular-ui-router/release/angular-ui-router'
// 	},
// 	shim: {
// 		// 需要导出一个名称为 angular 的全局变量， 否则无法使用
// 		'angular' : { exports: 'angular' },
// 		// 设置 angular 的其它模块依赖 angular 核心模块
// 		'angular-route': {
// 			deps: ['angular'],
// 			exports: 'ngRoute'
// 		},
// 		'angular-ui-route': {
// 			deps: ['angular']
// 		}
// 	},
//
// 	deps:[./bootstrap]
// });
// require([
// 	'angular',
// 	'app',
// 	// 'angular-ui-route',
// 	'directives/myDirectives'
// 	], function(angular) {
// 	//	var $html = angular.element(document.getElementsByTagName('html')[0]);
// 	//	angular.element().ready(function() {
// 	//		// bootstrap the app manually
// 	//		angular.bootstrap(document, ['app']);
// 	//	});
// 		angular.element(document).ready(function () {
// 			angular.bootstrap(document, ['myApp']);
// 		});
// 	}
// );

require.config({
    baseUrl: 'scripts',
  // alias libraries paths
    paths: {
        'domReady': '../bower_components/requirejs-domready/domReady',
        'angular': '../bower_components/angular/angular',
        'angular-route': '../bower_components/angular-route/angular-route',
        'angular-ui-route': '../bower_components/angular-ui-router/release/angular-ui-router'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        },

        'angular-route': {
			deps: ['angular'],
			exports: 'ngRoute'
		}
    },

    // kick start application
    deps: ['./bootstrap']
});
