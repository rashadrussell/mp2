var movieHunt = angular.module('MovieHunt', [
	'ngRoute',
	'movieHuntControllers'
]);

movieHunt.filter('search', function() {
	return function(collection, input) {
		if(input === undefined) return;
		var output = [],
		len = input.length;
		
		angular.forEach(collection, function(movie) {
			if(movie.title.substr(0, len).toLowerCase() === input.toLowerCase()) {
				output.push(movie);
			}
		});

		return output;
	}
});

/*

movieHunt.filter('orderByGenre', function() {
	return function(collection, input) {
		if(input === undefined) return;

		var output = [];

		angular.forEach(collection, function(genre) {

		});

		return output;
	}
});
*/

movieHunt.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/list', {
				templateUrl: './partials/list.html',
				controller:  'MovieListCtrl'
			}).
			when('/gallery', {
				templateUrl: './partials/gallery.html',
				controller:  'MovieGalleryCtrl'
			}).
			when('/details/:rank', {
				templateUrl: './partials/details.html',
				controller:  'MovieDetailCtrl'
			}).
			otherwise({
				redirectTo: '/list'
			});
	}
]);