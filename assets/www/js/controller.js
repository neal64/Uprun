var artistControllers = angular.module('artistControllers',[]);

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
    $http.get('js/data.json').success(function(data) {
        $scope.artists = data;
        $scope.artistOrder = "name";
    });
    }]);



artistControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
    $http.get('js/data.json').success(function(data) {
        $scope.artists = data;
        $scope.whichItems = $routeParams.itemsId;

        if($routeParams.itemsId > 0){
            $scope.prevBtn = Number($routeParams.itemsId)-1;
        }else{
            $scope.prevBtn = $scope.artists.length-1;
        }
        if($routeParams.itemsId < $scope.artists.length-1){
            $scope.nextBtn = Number($routeParams.itemsId)+1;
        }else{
            $scope.nextBtn = 0;
        }


    });
}]);