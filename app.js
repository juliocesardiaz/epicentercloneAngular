var epicenter = angular.module('epicenter', ['ui.router']);

epicenter.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('home', {
		url: "",
		templateUrl: "partials/home.html"
	});
	
	$stateProvider.state('teacher',  {
		url: "/teacher",
		templateUrl: "partials/teacher.html",
		controller: 'EpicenterCtrl'
	});
	
	$stateProvider.state('students',  {
		url: "/students",
		templateUrl: "partials/students.html",
		controller: 'EpicenterCtrl'
	});
	
});