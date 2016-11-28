__$rcc
    .controller(
        /* _NAME_         */ "LoginController",
        /* _DEPENDENCIES_ */ [ "$scope", "$http", "$location", "StaticFuncs",

            function($scope, $http, $location, StaticFuncs)
            {
                $scope.name = null;
                $scope.username = "";
                $scope.password = "";

                $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

                $scope.login = function()
                {
                    /*$http
                        .post("/gws/test/authenticate", {username: $scope.username, password: $scope.password})*/
                    $http
                        .get("/gws/test/authenticate?username="+$scope.username+"&password=" + $scope.password)
                        .then(
                            function(o){
                                var sToken = o.data.token;
                                StaticFuncs.saveToken(sToken);
                                $http.defaults.headers.common.Authorization = "Bearer " + sToken;
                                alert("You logged in successfully");
                                $location.url("/feature/f1");
                            },
                            function(e){
                                alert("An error occurred: " + e.data);
                            }
                        );
                };
            }
        ])
;
