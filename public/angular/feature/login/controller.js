__$rcc
    .controller(
        /* _NAME_         */ "LoginController",
        /* _DEPENDENCIES_ */ [ "$scope", "$http", "$location", "StaticFuncs",

            function($scope, $http, $location, StaticFuncs)
            {
                $scope.name = null;
                $scope.username = "";
                $scope.password = "";
                $scope.errorMessage = null;

                $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

                $scope.login = function()
                {
                    $http
                        .post(
                            "/gws/test/authenticate",
                            $.param({username: $scope.username, password: $scope.password}),
                            {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                        )
                        .then(
                            function(o){
                                $scope.errorMessage = null;
                                var sToken = o.data.token;
                                StaticFuncs.saveToken(sToken);
                                $http.defaults.headers.common.Authorization = "Bearer " + sToken;
                                alert("You logged in successfully");
                                $location.url("/feature/f1");
                            },
                            function(e){
                                $scope.errorMessage = e.status + " " + e.statusText;
                                //$location.url("/feature/login");
                            }
                        );
                };
            }
        ])
;
