
app.controller("viewArticleCtrl", function ($scope, $http, GetArticlesService) {
    let user = JSON.parse(localStorage.getItem('User'));
    $scope.Username = user.FirstName;
    GetArticlesService.GetArticles(
        function (response) {
            $scope.articles = response.data;
        }
    );
    $scope.More = function (item) {
        alert(item.Price);
    }

}) 