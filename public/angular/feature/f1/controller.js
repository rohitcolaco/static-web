__$rcc.controller(
	/* _NAME_         */ "F1Controller",
	/* _DEPENDENCIES_ */ [ "$scope", "$http", "$timeout", "$location",
	function($scope, $http, $timeout, $location)
	{
		$scope.name = "UNDEFINED";
		$scope.sseResponse = "No SSE messages as yet";
		$scope.disableSse = false;

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

		$scope.dispatchJob = function()
		{
			$http
				.post("/gws/test/job/dispatch")
				.then(
					function(j){
						alert("Successfully dispatched job " + j);
					},
					function(e){
						alert("Failed to dispatch.\n" + e.status + " \\ " + e.statusText);
					}
				);
		};

		$scope.initiateSse = function()
		{
			$scope.disableSse = true;
			var source = new EventSource("/gws/events/sse");
			source.onmessage = function(event) {
				$scope.sseResponse += event.data + "<br>";
			};
		};

		init();
	}
]);
