
app.controller("addarticleCtrl", function ( $scope, $http,uploadServcie,uploadServcie2,addArticleService) {
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
                 function(response){
                     alert(response);
                 }
             );

         });
    }
}) 