app.controller("CustomerDashboardCtrl", function ($http, $scope, $window, $timeout, $location) {

    let user = JSON.parse(localStorage.getItem('User'));
    if (user) {

        $scope.Username = user.FirstName;

    } else {
        localStorage.clear();
        $location.path('/User-Login');

    }
})