__$rcc.controller(
	/* _NAME_         */ "F1Controller",
	/* _DEPENDENCIES_ */ [ "$scope", "$http", "$timeout", "$location",
	function($scope, $http, $timeout, $location)
	{
		$scope.name = "UNDEFINED";

		function init()
		{
			$http
				.get("/gws/test/json")
				.then(
					function(o){
						$scope.name = o.data.errorCode;
					},
					function(e){
						$scope.name = "FAILED";
					}
				);
		}

		init();
	}
]);
