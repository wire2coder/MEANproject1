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

        .when('/customers/details/:id', {
            controller: 'CustomersController', // controllers/customerscontroller.js
            templateUrl: 'views/customers_details.html'
        })

        .when('/customers/add', {
            controller: 'CustomersController',
            templateUrl: 'views/add_customer.html'
        })

        .when('/invoices', {
            controller: 'InvoicesController',
            templateUrl: 'views/invoices.html'
        })

        .when('/invoices/add', {
            controller: 'InvoicesController',
            templateUrl: 'views/add_invoice.html'
        })

        .when('/customers/edit/:id', {
            controller: 'CustomersController',
            templateUrl: 'views/edit_customer.html'
    })

        .otherwise({
            redirectTo: '/'
        });
});