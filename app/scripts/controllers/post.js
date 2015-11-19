'use strict';

/**
 * @ngdoc function
 * @name mmApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the mmApp
 */
angular.module('mmApp')
  .controller('PostCtrl', function ($scope, $routeParams, $http) { // $routeParams gives access to var in url 

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.postID = $routeParams.postID;

    $http.get('http://jsonplaceholder.typicode.com/photos/'+$routeParams.postID).
    success(function(data){
    	$scope.results = data;
    });


  });