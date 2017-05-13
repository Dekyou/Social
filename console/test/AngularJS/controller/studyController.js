/**
 * Created by Dekyou on 2017/5/1.
 */
studyApp.controller('studyCtrl',['$scope','$parse','$interpolate','EmailParser',function ($scope,$parse,$interpolate,EmailParse) {
    //test one
    $scope.$watch('expr',function (newVal,oldVal,scope) {
        if(newVal != oldVal){
            var parseFun = $parse('expr');
            $scope.parsedValue = parseFun(scope);
        }
    })

    // test two
    $scope.$watch('emailBody',function (body) {
        if(body){
            // var template = $interpolate(body);
            // $scope.previewText = template({to:$scope.to});
            $scope.previewText = EmailParse.parse(body,{
               to: $scope.to
            });
        }
    });
}]);