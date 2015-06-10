var journalApp = angular.module('journalApp', []);



journalApp.controller('mainController', function($scope) {

	$scope.name = 'Jane Doe';
	console.log($scope);

});