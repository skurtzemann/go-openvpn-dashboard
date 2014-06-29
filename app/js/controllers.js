'use strict';

/* Controllers */

var ovpnDashboardApp = angular.module('ovpnDashboardApp', []);

ovpnDashboardApp.controller('ListUsers', function($scope, $http) {
    $http.get('http://localhost:3000/users/_full').success(function(data) {
    	$scope.users = data;
    });
});

ovpnDashboardApp.controller('Status', function($scope, $http) {
    $http.get('http://localhost:3000/_ping').success(function(data, status) {
    	$scope.status_data = data;
    	$scope.status_status = status;
    });
});