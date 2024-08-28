var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "./pages/home.html",
			controller: "HomeController",
		})
		.when("/about", {
			templateUrl: "./pages/about.html",
			controller: "AboutController",
		})
		.when("/contact", {
			templateUrl: "./pages/contact.html",
			controller: "ContactController",
		})
		.otherwise({
			redirectTo: "/",
		});
});

app.controller("HomeController", function ($scope) {
	$scope.message = "Welcome to the Home Page!";
});

app.controller("AboutController", function ($scope) {
	$scope.message = "Learn more About Us!";
});

app.controller("ContactController", function ($scope) {
	$scope.message = "Get in Touch with Us!";
});

app.controller("NavController", function ($scope, $location) {
	$scope.isSidebarOpen = false;

	$scope.isActive = function (route) {
		return $location.path() === route;
	};

	$scope.setActive = function (route) {
		$location.path(route);
	};

	$scope.toggleSidebar = function () {
		$scope.isSidebarOpen = !$scope.isSidebarOpen;
	};
});
