app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'components/home/home.html',
            controller: 'HomeCtrl'
        })
        .when("/Home", {
            templateUrl: 'components/home/home.html',
            controller:'HomeCtrl'
        })
        .when("/User-Login", {
            templateUrl: 'components/login/login.html',
            controller: 'LoginCtrl'
        })       
}); 