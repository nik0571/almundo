/**
 * @name Controller home
 * @package Angular
 * @author Naycool Gonzalez <naycoolgonzalez@gmail.com>
 * @description Controladores del home
 */

(function () {
  'use strict';

  angular
   .module('app')
   .controller('homeCtrl', ['$scope', '$timeout', '_hotels', homeCtrl])


   /**
    * @method homeCtrl
    * @description Controlador
    * @param {var} $scope
    */
   function homeCtrl ($scope, $timeout, _hotels) {
    var vm = this;


    $scope.hotels = [];


    //Funciones
    vm._init = _init;
    vm.getHotels = getHotels;


    /**
     * @name getHotels
     * @desc cargar hoteles
     */
    function getHotels () {
      return _hotels
      .getHotels()
      .then(function successCallback (res) {
        console.log("successCallback getHotels", res);
        $scope.hotels = res.data.data;
      }, function errorCallback (error) {
        console.log("errorCallback getHotels()", error);
      });
    }

    /**
     * Funciones a disparar a cargar la ventana
     */
    function _init() {
      vm.getHotels();
      $timeout(function () {
      },1000)
    }

    angular.element(document).ready(vm._init);

   }

})();