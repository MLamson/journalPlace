var journalApp = angular.module('journalApp', ['ngMessages', 'ngResource']);



journalApp.controller('mainController', ['$scope', '$resource', '$log', '$timeout', '$filter', function($scope, $resource, $log, $timeout, $filter) {

	$scope.name = "Mark";

	$timeout(function() {

		$scope.name = "Everybody";

	}, 3000);

	$scope.handle = '';
	$scope.lowercasehandle = function() {

		return $filter('lowercase')($scope.handle);

	};

}]);