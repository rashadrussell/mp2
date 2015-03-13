var movieHuntControllers = angular.module('movieHuntControllers', []);


movieHuntControllers.controller('MovieListCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('/data/imdb250.json').success(function(data) {
		$scope.courseInfo = data;
		$scope.artistOrder = 'name';
		$scope.sortBy = ["title", "rank"];
		$scope.sortOption = $scope.sortBy[0]; 
		$scope.reverse = false;
	});
}]);


movieHuntControllers.controller('MovieGalleryCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('/data/imdb250.json').success(function(data) {
		var uniqGenres = {};
		$scope.courseInfo = data;
		$scope.genreFiler = null;
		
		angular.forEach($scope.courseInfo, function(movie) {
			for(var i=0; i<movie.genre.length; i++) {
				uniqGenres[movie.genre[i]] = 1;
			}
		});

		$scope.genres = Object.keys(uniqGenres);

	});
}]);


movieHuntControllers.controller('MovieDetailCtrl', ['$scope', '$http', '$routeParams', 
	function($scope, $http, $routeParams) {
		$http.get('/data/imdb250.json').success(function(data) {
			$scope.courseInfo = data;
			$scope.chosenMovie;

			angular.forEach($scope.courseInfo, function(item) {
				if($routeParams.rank == item.rank) {
					$scope.chosenMovie = item;
					return;
				}
			});



		});
}]);