
app.controller("viewArticleCtrl", function ($scope, $http, GetArticlesService) {
    GetArticlesService.GetArticles(
        function (response) {
            $scope.articles = response.data;
        }
    );
    $scope.More = function (item) {
        alert(item.Price);
    }

}) 