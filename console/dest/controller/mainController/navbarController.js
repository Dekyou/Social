/**
 * Created by Dekyou on 2017/5/13.
 */

socialApp.controller('navbarCtrl',navbarCtrl);

navbarCtrl.$inject = ['$scope','$uibModal','$document'];
function navbarCtrl($scope,$uibModal,$document) {
    var nbCtrl = this;
    nbCtrl.loginResult = false;
    //登陆、注册页
    nbCtrl.openRegOrLogin = function (parentSelector) {
        var parentEle = parentSelector ? angular.element($document[0].querySelector(parentSelector)) : undefined;
        $uibModal.open({
            $scope:true,
            appendTo:parentEle,
            size:'',
            templateUrl:'console/templates/login/loginAndRegist.html',
            controller:'loginAndRegistController',
            controllerAs:'nbCtrl1'
        });
    }
    //测试点击事件
    nbCtrl.socialClick = function (name) {
        alert(name);
    }
}

socialApp.controller('loginAndRegistController',loginAndRegistController);
// loginAndRegistController.$inject =  ['$scope'];
//登陆事件
function loginAndRegistController() {
    var nbCtrl1 = this;
    //登陆事件
    nbCtrl1.doLogin  = function() {
        nbCtrl1.loginResult = true;
    }
}
