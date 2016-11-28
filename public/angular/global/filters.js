__$rcc
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
