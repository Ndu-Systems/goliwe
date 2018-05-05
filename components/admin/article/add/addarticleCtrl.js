
app.controller("addarticleCtrl", function ($scope, $http, uploadServcie, uploadServcie2, addArticleService) {
    let user = JSON.parse(localStorage.getItem('User'));
    $scope.Username = user.FirstName;
    $scope.Price = 40;
    $scope.filesChangedCover = function (eml) {
        $scope.coverfiles = eml.files;
        $scope.cover_name = $scope.coverfiles[0].name;
        $scope.$apply();
    };
    $scope.filesChangedFile = function (eml) {
        $scope.articleFiles = eml.files;
        $scope.filename = $scope.articleFiles[0].name;
        $scope.$apply();
    };
    $scope.Submit = function () {
        if (!$scope.ISSN) {
            $scope.message = "Please Enter ISSN";
            return false;
        }
        if (!$scope.Price) {
            $scope.message = "Please Enter Price";
            return false;
        }
        if (!$scope.Title) {
            $scope.message = "Please Enter Title";
            return false;
        }
        if (!$scope.Abstract) {
            $scope.message = "Please Enter Abstract";
            return false;
        }
        if (!$scope.cover_name) {
            $scope.message = "Please Upload Cover Image";
            return false;
        }
        if (!$scope.filename) {
            $scope.message = "Please Upload Article File(PDF)";
            return false;
        }

        $scope.message = undefined;
       uploadServcie.UploadFiles(
        $scope.cover_name,
        $scope.coverfiles,
         function(response){
        $scope.coverURL = response;
        });

         uploadServcie2.UploadFiles(
             $scope.filename,
            $scope.articleFiles,
             function(response){
             $scope.articleURL = response;
             // now push to db
           
             var data = {
                issn  			   : $scope.ISSN,
                Price              : $scope.Price,
                Title              : $scope.Title,
                PublisherID        : 1,
                ImageUrl           : $scope.coverURL,
                Abstract           : $scope.Abstract,
                FileUrl            : $scope.articleURL
             }

             addArticleService.AddAticle(
                 data,
                 function (response) {
                     if (parseInt(response) == 1) {
                         alert("Article Uploaded");
                     } else {
                         $scope.message = response;
                     }
                    
                 }
             );

         });
    }
}) 