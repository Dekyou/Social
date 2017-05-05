socialApp.controller('mainCtrl',function($scope,$uibModal,$document){
	$scope.name = "gaojing";
	$scope.alert = function (msg) {
		alert(msg);
    }
    $scope.open = function (parentSelector) {
	    var parentEle = parentSelector ? angular.element($document[0].querySelector(parentSelector)) : undefined;
	$uibModal.open({
        appendTo:parentEle,
        size:'',
        templateUrl:'console/templates/login/loginAndRegist.html'
		});
    }
});