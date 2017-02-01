__$rcc.controller(
    /* _NAME_         */ "F1DlgController",
    /* _DEPENDENCIES_ */ [ "$scope", "$element", "nameOfPerson", "close",
    function($scope, $element, nameOfPerson, close)
    {
        $scope.whoAreYou = nameOfPerson;

        $scope.ok = function() {
            close($scope.whoAreYou, 500); // close, but give 500ms for bootstrap to animate
        };

        $scope.cancel = function()
        {
            if (confirm("Are you sure you want to cancel?"))
            {
                $element.modal('hide');
                close(null, 500);
            }
        };
    }
]);
