var myApp = angular.module('myApp');

myApp.controller('InvoicesController', ['$scope', '$http', '$location','$routeParams',
    function ($scope, $http, $location, $routeParams) {
        console.log('Invoices Controller Initialized.');

        $scope.getInvoices = function () {
            $http.get('/api/invoices').success(
                function (response) {
                    $scope.invoices = response;
                }
            );
        };

        $scope.getInvoice = function () {
            var id = $routeParams.id;

            $http.get('/api/invoices/' + id).success(

                function (response) {
                    $scope.invoice = response;

                     // Fill Select ???
                    // HERE

                }
            );
        };

        $scope.getCustomers = function () {
            $http.get('/api/customers')
                .success(
                function (response) {
                    $scope.customers = response;
                }
            )
        };

        $scope.addInvoice = function () {
            $http.post('/api/invoices', $scope.invoice)
                .success(
                function (response) {
                    window.location.href = '/#/invoices';
                }
            )
        };

        $scope.updateInvoice = function () {
            $http.put('/api/invoices/' + $scope.invoice._id, $scope.invoice)
                .success(function (response) {
                    // refresh the current page
                    window.location.href = '/#invoices';
                });

        };

        $scope.deleteInvoice = function (id) {

            $http.delete('/api/invoices/' + id)
                .success(function (response) {
                    window.location.href = '/#invoices'; //http://hostname:3000/#/invoices
                })
        };
    }
]);