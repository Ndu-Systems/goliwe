
app.controller("viewArticleCtrl", function ($scope, $http, GetArticlesService) {
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