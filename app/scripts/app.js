var journalApp = angular.module('journalApp', ['ngMessages']);



journalApp.controller('mainController', function($scope) {

	$scope.name = 'Jane Doe';
	console.log($scope);

});