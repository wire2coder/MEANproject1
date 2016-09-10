var myApp = angular.module('myApp');

myApp.controller('InvoicesController', ['$scope', '$http',
    function ($scope, $http) {
        console.log('Invoices Controller Initialized.');
    }
]);