var __$aoc = angular.module("ngAppTest", []);

__$aoc
    .controller(
        /* _NAME_         */ "BodyController",
        /* _DEPENDENCIES_ */ [ "$scope", "$http",

        function($scope, $http)
        {
            $scope.name = null;

            $http
                .get("/gws/test/json")
                .then(
                    function(o){
                        $scope.name = o.data.errorCode;
                    },
                    function(e){
                        //$scope.name = "ERROR: " + e.data;
                    }
                );
        }
    ])
;

__$aoc
    .directive('focusOn', function(){
    return function(scope, elem, attr){
        scope.$on(attr.focusOn, function(e){
            elem[0].focus();
            try {
                elem[0].select();
            } catch(e) { }
        });
    };
});

__$aoc
    .filter('orderObjectBy', function(){
    return function(input, attribute) {
        if (!angular.isObject(input)) return input;

        var array = [];
        for(var objectKey in input) {
            input[objectKey].key = objectKey;
            array.push(input[objectKey]);
        }

        array.sort(function(a, b){
            var x = a[attribute], y = b[attribute];
            return x > y ? 1 : x < y ? -1 : 0;
        });
        return array;
    }
});
