__$rcc
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