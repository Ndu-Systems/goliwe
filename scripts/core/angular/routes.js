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
        .when("/New-Article", {
            templateUrl: 'components/admin/article/add/addarticle.html',
            controller: 'addarticleCtrl'
        })      
        .when("/View-Articles", {
            templateUrl: 'components/admin/article/view/articles.html',
            controller: 'viewArticleCtrl'
        })   
}); 