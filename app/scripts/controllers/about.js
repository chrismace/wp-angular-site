'use strict';

/**
 * @ngdoc function
 * @name mmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mmApp
 */
angular.module('mmApp').controller('AboutCtrl', function ($scope, $http) { //with $http service added and available to the controller

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	$scope.onButtonClick = function(){
		console.log(this + " button clicked");
		//using get method and listening for success event
		$http.get('http://jsonplaceholder.typicode.com/photos').success(function(data){
			$scope.results = data;
		});
		$scope.quantity = 5;
	};

	$scope.bands = [
	{'name':"Information Society", 'album':"Hello World"},
	{'name':"the Cure", 'album':"Wish"},
	{'name':"Windhand", 'album':"Grief's Eternal Flower"}
	];

});