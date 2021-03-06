var socialApp = angular.module('socialApp', ['ui.router','ui.bootstrap']);



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
                	templateUrl: 'console/templates/layout/indexpage.html'
                },
		        'navbar@index': {
		            templateUrl: 'console/templates/navbar.html'
		        },
		        'container@index': {
		            templateUrl: 'console/templates/container/container-main.html'
		        }
              } 
        })
        .state('technics', {
            url: '/technics',
            views: {
                "": {
                    templateUrl: 'console/templates/layout/left-right-layout.html'
                },
                'navbar@technics': {
                    templateUrl: 'console/templates/navbar.html'
                },
                'leftmenu@technics': {
                    templateUrl: 'console/templates/menu/menuMain.html'
                },
                'container@technics': {
                    templateUrl: 'console/templates/container/container-technics.html'
                }
            }
        })
        .state('angularJS',{
        	url:'/technics/angularJS',
    		views:{
                "": {
                	templateUrl: 'console/templates/layout/left-right-layout.html'
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
                    templateUrl: 'container/container-technics.html'
                }
            }
        })
});
*/
