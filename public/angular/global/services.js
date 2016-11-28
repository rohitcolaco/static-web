__$rcc.service("StaticFuncs",

    ["$http", function($http) {

    this.loadToken = function()
    {
        return lscache.get("jwt-rcolaco");
    };

    this.saveToken = function(sToken)
    {
        return lscache.set("jwt-rcolaco", sToken, 60); // STORE FOR 1 HR
    };
}]);