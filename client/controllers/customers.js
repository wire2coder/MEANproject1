/**
 * Created by user0021 on 9/9/16.
 */

var myApp = angular.module('myApp');

myApp.controller('CustomersController', ['$scope', '$http', '$location', '$routeParams'
    , function ($scope, $http, $location, $routeParams) {
        console.log('Customers Controller Initialized.');

        $scope.getCustomers = function () {
            $http.get('/api/customers').success(function (response) {
                $scope.customers = response;
            });
        };

        $scope.getCustomer = function () {
            var id = $routeParams.id;

            $http.get('/api/customer/' + id).success(function (response) {
                $scope.customer = response;
            });
        };
}]);