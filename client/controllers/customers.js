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

            $http.get('/api/customers/' + id).success(function (response) {

                console.log(response);
                $scope.customer = response;
            });
        };

        $scope.addCustomer = function () {
            console.log('ello!');
            console.log(customer.first_name);
            console.log(customer.last_name);
        };

        $scope.getCustomerInvoices = function() {
            var id = $routeParams.id;

            $http.get('/api/invoices/customer/' + id)
                .success(
                function(response) {
                    $scope.customer_invoices = response;
                }
            )
        }
}]);