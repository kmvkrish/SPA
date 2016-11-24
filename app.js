var app = angular.module('LunchCheck', []);
app.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
    $scope.lunchCheckMessage = "";
    $scope.lunchItems = "";

    $scope.checkLunch = function(){
        var items = [];
        if($scope.lunchItems){
            items = $scope.lunchItems.split(",");
            if(items.length < 1){
                $scope.lunchCheckMessage = "Empty!";
            }else if (items.length <= 3) {
                $scope.lunchCheckMessage = "Enjoy!"
            }else if(items.length > 3){
                $scope.lunchCheckMessage = "Too Much!";
            }
        }else{
            $scope.lunchCheckMessage = "Empty!";
        }
    };
}
