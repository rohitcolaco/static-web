__$rcc
    .config(["$routeProvider",
        function($routeProvider)
        {
            $routeProvider
                .when("/feature/login", {
                    templateUrl: function($routeParams)
                    {
                        return "feature/login/view.html";
                    },
                    controller: "LoginController"
                })
                .when("/feature/f1", {
                    templateUrl: function($routeParams)
                    {
                        return "feature/f1/view.html";
                    },
                    controller: "F1Controller"
                })
                .otherwise({
                    redirectTo: function()
                    {
                        return "/feature/login";
                    }
                });
        }
    ]);
