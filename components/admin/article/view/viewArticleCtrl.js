
app.controller("viewArticleCtrl", function ($scope, $http, GetArticlesService) {
    let user = JSON.parse(localStorage.getItem('User'));
    if (user) {
             $scope.Username = user.FirstName;
             GetArticlesService.GetArticles(
                 function (response) {
                     $scope.articles = response.data;
                     if (!$scope.articles) {
                         $scope.message = 'No articles found!'
                     }
                 }
             );
             $scope.More = function (item) {
                     alert(item.Price);
        }
    }
    else
    {
        localStorage.clear();
        $location.path('/User-Login');

    }
}) 