__$rcc
    .controller(
        /* _NAME_         */ "AppController",
        /* _DEPENDENCIES_ */ [ "$scope", "$http", "$location", "StaticFuncs",

            function($scope, $http, $location, StaticFuncs)
            {
                $scope.isLoggedIn = function()
                {
                    var sToken = StaticFuncs.loadToken();
                    return sToken !== null && sToken !== undefined;
                };

                $scope.logout = function()
                {
                    lscache.remove("jwt-rcolaco");
                    $location.url("/feature/login");
                }
            }
        ])
;
