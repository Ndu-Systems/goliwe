
app.controller("LoginCtrl", function ($http, $scope, $window, $timeout, $location) {

    //Sign Up Here
    $scope.SignUp = function () {
        $scope.IsValid = true;
        $scope.message = undefined;
        var FirstName = $scope.FirstName;
        var Surname = $scope.Surname;
        var Email = $scope.Email;
        var Password = $scope.Password;
        var ConfirmPassword = $scope.ConfirmPassword; 

        if (Surname === undefined || Surname === "" || FirstName === undefined || FirstName === "")
        {
            $scope.IsValid = false;
            $scope.message = "Please provide personal information";
            return;
        }
        if (Email === "" || Email === undefined)
        {
            $scope.IsValid = false;
            $scope.message = "All Fill in All Fields";
            return;
        }
        if (ConfirmPassword === "" || ConfirmPassword === undefined)
        {
            $scope.IsValid = false;
            $scope.message = "Please Confirm Your Password!";
            return;
        }
        if (Password != ConfirmPassword)
        {
            $scope.IsValid = false;
            $scope.message = "Oops! Passwords Do not match please try again!";
            return;
        }
        if ($scope.IsValid) {
            debugger
            var data = {
                Email: Email,
                FirstName: FirstName,
                Surname: Surname,
                Email: Email,
                Password: Password
            };
            $http.post(GetApiUrl("signup"), data)
                .then(function (response, status)
                {
                    if (parseInt(response.data) === 1)
                    {
                        alert("User Inserted!")
                    }
                    else
                    {
                        $scope.message = response;
                    }

                });
           

        }
        else
        {
            $scope.message = "Please Fill In All Fields";
        }
    };

    $scope.SignIn = function () {

        $scope.IsValid = true;
        $scope.message = undefined;

        var Email = $scope.lEmail;
        var Password = $scope.lPassword;

        if (Email === "" || Email === undefined)
        {
            $scope.IsValid = false;
            $scope.message = "Invalid Email / Password Provided";
            return;
        }
        if (Password === "" || Password === undefined)
        {
            $scope.IsValid = false;
            $scope.message = "Invalid Email / Password Provided";
            return;
        }
        if ($scope.IsValid)
        {
            debugger
            var data = {
                Email: Email,
                Password: Password
            };

            $http.post(GetApiUrl("signin"), data)
                .then(function (response, status)
                {
                    if (parseInt(response.data) === 1)
                    {
                        alert("User Logs In!")
                    }
                    else {
                        $scope.message = "Invalid Email / Password Provided";
                    }

                });
        }
    }

})