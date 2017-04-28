var socialApp = angular.module('socialApp', ['ui.router']);


/*socialApp.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);
*/
socialApp.run(['$rootScope', '$state', '$stateParams',
    function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
]);

socialApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                "": {
                	templateUrl: 'console/templates/mainpage.html'
                },
		        'navbar@index': {
		            templateUrl: 'console/templates/navbar.html'
		        },
		        'leftmenu@index': {
		            templateUrl: 'console/templates/menu/menuMain.html'
		        },
		        'container@index': {
		            templateUrl: 'console/templates/container/containerMain.html'
		        }
              } 
        })
        .state('angularJS',{
        	url:'/index/technics/angularJS',
    		views:{
                "": {
                	templateUrl: 'console/templates/mainpage.html'
                },
		        'navbar@angularJS': {
		        	 templateUrl: 'console/templates/navbar.html'
		        },
		        'leftmenu@angularJS': {
		        	templateUrl: 'console/templates/technics/menu/angularJS.html'
		        },
		        'container@angularJS': {
		        	templateUrl: 'console/templates/technics/container/angularjs-bind.html'
		        }
    		}
        })
});

/*socialApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                'navbar': {
                    templateUrl: 'navbar.html'
                },
                'leftmenu': {
                    templateUrl: 'menu/menuMain.html'
                },
                'container': {
                    templateUrl: 'container/containerMain.html'
                }
            }
        })
});
*/
