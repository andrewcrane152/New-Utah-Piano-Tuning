var app = angular.module('utpt', ['ngRoute']);

app.config(function($routeProvider){
   $routeProvider
   .when('/intro', {
        templateUrl: 'app/views/intro.html',
        controller: 'introController',
    })
    .when('/blog', {
        templateUrl: 'app/views/blog.html',
        controller: 'blogController',
    })
    .when('/contact', {
        templateUrl: 'app/views/contact.html',
        controller: 'contactController',
    })
    .when('/request', {
        templateUrl: 'app/views/request.html',
        controller: 'requestController',
    })
    .when('/tech-login', {
        templateUrl: 'app/views/tech-login.html',
        controller: 'techLoginController',
    })    
    
    .otherwise({
        redirectTo: '/intro'
    });
});
