//require.config({
//	paths: {
//		angular: '../bower_components/angular/angular',
//		ngRoute: '../bower_components/angular-route/angular-route',
//		// angularMocks: 'bower_components/angular-mocks/angular-mocks',
//		ngResource: '../bower_components/angular-resource/angular-resource'
//		// text: 'bower_components/requirejs-text/text'
//	},
//	shim: {
//		'angular': {'exports' : 'angular'},
//		'ngResource': { exports: 'ngResource', deps: ['angular'] },
//		'ngRoute': { exports: 'ngRoute', deps: ['angular'] }
//		// 'angularMocks': {
//		// 	deps:['angular'],
//		// 	'exports':'angular.mock'
//		// }
//	},
//	priority: [
//		"angular"
//	]
//	// deps: window.__karma__ ? allTestFiles : [],
//	// callback: window.__karma__ ? window.__karma__.start : null,
//	//baseUrl: 'scripts/'
//});
//
requirejs.config({
	// 所有脚本的跟目录， 相对于 html
	baseUrl: 'scripts',
	paths: {
		// angular 脚本的路径， 相对于 baseUrl
		'angular': '../bower_components/angular/angular',
		'angular-route': '../bower_components/angular-route/angular-route'
	},
	shim: {
		// 需要导出一个名称为 angular 的全局变量， 否则无法使用
		'angular' : { exports: 'angular' },
		// 设置 angular 的其它模块依赖 angular 核心模块
		'angular-route': { 
			deps: ['angular'],
			exports: 'ngRoute'
		}
	}
});
require([
	'app',
	'angular'
	], function(app, angular) {
	//	var $html = angular.element(document.getElementsByTagName('html')[0]);
	//	angular.element().ready(function() {
	//		// bootstrap the app manually
	//		angular.bootstrap(document, ['app']);
	//	});
		angular.bootstrap(document, ['myApp']);
	}
);