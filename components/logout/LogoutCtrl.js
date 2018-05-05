app.controller("LogoutCtrl", function ($http, $scope, $window, $timeout, $location) {

    localStorage.clear();
    $location.path('/');

})