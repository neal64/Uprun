var myApp = angular.module('myApp',[
    'ngRoute',
    'artistControllers'
]);

myApp.config(['$routeProvider',function($routeProvider) {
    $routeProvider.
        when('/list' , {
        templateUrl:'layout/list.html',
        controller:'ListController'
    }).
        when('/details/:itemsId' , {
            templateUrl: 'layout/details.html',
            controller: 'DetailsController'
        }).
    otherwise({
        redirectTo: '/list'
    });
}]);



