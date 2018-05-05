app.service('uploadServcie', function($http){
    this.UploadFiles = function(filename, files, callback) {
        if (filename !== undefined) {
            var formData = new FormData();
            angular.forEach(files, function (file) {
                formData.append('file', file);
                formData.append('name', file.name)
            });

            $http.post(GetApiUrl("upload"), formData, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            })
                .then(function (resp) {
                    if(resp.data){
                        let  url= GetHost(resp.data);
                        callback(url.trim());
                    }
                 
                })
        } else {
           return  false;
        }
    }

});

app.service('uploadServcie2', function($http){
    this.UploadFiles = function(filename, files, callback) {
        if (filename !== undefined) {
            var formData = new FormData();
            angular.forEach(files, function (file) {
                formData.append('file', file);
                formData.append('name', file.name)
            });

            $http.post(GetApiUrl("upload"), formData, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            })
                .then(function (resp) {
                    if(resp.data){
                        let  url= GetHost(resp.data);
                        callback(url.trim());
                    }
                 
                })
        } else {
              return  false;
        }
    }

});


app.service('addArticleService', function($http){
    this.AddAticle = function(articleObj, callback) {
        if(articleObj){
            $http.post(GetApiUrl("AddArticleStepOne"), articleObj) 
                .then(function (resp) {
                    if(resp.data){
                        callback(resp.data);
                    }
                 
                })
        }else{
            return false;
        }
    }

});


app.service('GetArticlesService', function($http){
    this.GetArticles = function(callback) {
       
        $http.post(GetApiUrl("GetAticles"), {}) 
                .then(function (resp) {
                    if(resp.data){
                        callback(resp.data);
                    }
                 
                })
       
    }

});