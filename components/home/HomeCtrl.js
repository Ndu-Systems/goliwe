app.controller("HomeCtrl", function ($http, $scope, $window, GetArticlesService, $location) {
    GetArticlesService.GetArticles(
        function (response) {
            $scope.articles = response.data;
            if ($scope.articles.length) {
                $scope.message = 'No articles found!'
            }
        }
    );
    $scope.More = function (item) {
        alert(item.Price);
    }

})