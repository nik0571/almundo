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
   .controller('homeCtrl', ['$scope', '_hotels', homeCtrl])


   /**
    * @method homeCtrl
    * @description Controlador
    * @param {var} $scope
    */
   function homeCtrl ($scope, _hotels) {
    var vm = this;

    $scope.filter = {
      name: "",
      score: []
    }
    $scope.hotels = [];

    //Funciones
    vm._init = _init;
    vm.filterScore = filterScore;
    vm.getHotels = getHotels;
    vm.toggleScore = toggleScore;

    /**
     * @name toggleScore
     * @param int value
     * @desc seleccionar puntuacion para filtrar
     */
    function toggleScore (value) {
      if(value !== undefined && value !== "") {
        if($scope.filter.score.indexOf(value) > -1)
          $scope.filter.score.splice($scope.filter.score.indexOf(value), 1);
        else
          $scope.filter.score.push(value);
      }
    }

    /**
     * @name filterScore
     * @desc filtro por puntuación
     * @param object data
     */
    function filterScore (data) {
      return $scope.filter.score.length <= 0 ? data : $scope.filter.score.indexOf(data.stars) !== -1 ? data : false;
    }

    /**
     * @name getHotels
     * @desc cargar hoteles
     */
    function getHotels () {
      return _hotels
      .getHotels($scope.filter)
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
    }

    angular.element(document).ready(vm._init);

   }

})();