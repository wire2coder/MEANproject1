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

        $scope.addInvoice = function () {
            $http.post('/api/invoices', $scope.invoice)
                .success(
                function (response) {
                    window.location.href = '/#/invoices';
                }
            )
        };
    }
]);