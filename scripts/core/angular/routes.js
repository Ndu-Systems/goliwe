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
        .when("/Logout", {
            templateUrl: 'components/logout/logout.html',
            controller: 'LogoutCtrl'
        })
        .when("/New-Article", {
            templateUrl: 'components/admin/article/add/addarticle.html',
            controller: 'addarticleCtrl'
        })      
        .when("/View-Articles", {
            templateUrl: 'components/admin/article/view/articles.html',
            controller: 'viewArticleCtrl'
        })   
       
        .when("/customer-dashboard", {
            templateUrl: 'components/customer/customer-dashboard.html',
            controller: 'CustomerDashboardCtrl'
        })
        .when("/admin-dashboard", {
            templateUrl: 'components/admin/admin-dashboard.html',
            controller: 'AdminDashboardCtrl'
        })
}); 