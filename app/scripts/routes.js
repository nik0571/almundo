/**
 * @name Routes
 * @package Angular
 * @subpackage JS
 * @author Naycool Gonzalez <naycoolgonzalez@gmail.com>
 * @description Configuracion de las rutas
 */

 (function () {
   'use strict';

   angular
    .module('app')
    .config(['$routeProvider', '$locationProvider', routes])
    .run(['$rootScope', run])

    /**
     * Configuracion de rutas
     */
    function routes ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          title: "Inicio",
          templateUrl: "views/home.html" + vApp,
          controller: "homeCtrl",
          controllerAs: "vm"
        })
        .when('/404', {
          title: "Error 404",
          templateUrl: "views/errors/404.html" + vApp
        })
        .otherwise({
          redirectTo: '/404'
        });

      $locationProvider.html5Mode(true);
    }

    /**
     * Realizar acciones al cargar ruta
     */
    function run ($rootScope) {
      $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
      });
    }

 })();