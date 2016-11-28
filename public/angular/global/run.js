__$rcc
    .run(
        [
            "$http", "StaticFuncs",
            function($http, StaticFuncs)
            {
                var sToken = StaticFuncs.loadToken();
                if (sToken != null)
                {
                    $http.defaults.headers.common.Authorization = "Bearer " + sToken;
                }
            }
        ]
    );