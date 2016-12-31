__$rcc.controller(
	/* _NAME_         */ "F1Controller",
	/* _DEPENDENCIES_ */ [ "$scope", "$http", "$timeout", "$location",
	function($scope, $http, $timeout, $location)
	{
		$scope.name = "UNDEFINED";
		$scope.sseResponse = "No SSE messages as yet";
		$scope.disableSse = false;

		/**
		 * A simple test endpoint
		 */
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

		/**
		 * Dispatches an async job via Amazon's SQS (configured through env vars)
		 */
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

		/**
		 * Initiates server side events
		 */
		$scope.initiateSse = function()
		{
			$scope.disableSse = true;
			var source = new EventSource("/gws/events/sse");
			source.onmessage = function(event) {
				$scope.sseResponse += event.data + "<br>";
			};
		};

		/**
		 * Sends an email (via Sendgrid configured through env vars)
		 */
		$scope.sendEmail = function()
		{
			$http
				.post(
					"/gws/test/email",
					{
						from: "source@domain.com",
						to: "target@someone.com",
						subject: "This is a test subject",
						body: "This is the body of your message."
					},
					{
						headers:
						{
							"Accept": "application/json",
							"Content-Type": 'application/json'
						}
					}
				)
				.then(
					function(r){
						alert("Successfully sent an email");
					},
					function(e){
						alert("Failed to send an email.\n" + e.status + " \\ " + e.statusText);
					}
				);
		};

		init();
	}
]);
