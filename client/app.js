var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'DashboardController', // controllers/dashboard.js
        templateUrl: 'views/dashboard.html'
    })
        .when('/customers', {
            controller: 'CustomersController',
            templateUrl: 'views/customers.html'
        })

        .when('/invoices', {
            controller: 'InvoicesController',
            templateUrl: 'views/invoices.html'
        })

        .otherwise({
            redirectTo: '/'
        });
});