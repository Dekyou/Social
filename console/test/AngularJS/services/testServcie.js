/**
 * Created by Dekyou on 2017/5/1.
 */
angular.module('emailParser',[])
    .config(['$interpolateProvider',function($interpolateProvider){
        $interpolateProvider.startSymbol('_');
        $interpolateProvider.endSymbol('_');
    }])
    .factory('EmailParser',['$interpolate',function($interpolate){
        return{
            parse:function(text,context){
                var template = $interpolate(text);
                return template(context);
            }
        };
    }]);
