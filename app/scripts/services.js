/**
 * @name Services
 * @package Angular
 * @author Naycool Gonzalez <naycoolgonzalez@gmail.com>
 * @description Servicios para consultar los hoteles
 */

(function () {
  'use strict';

  angular
  .module('app')
  .service('_hotels', ['$http', 'FCServer', _hotels]);

  function _hotels ($http, FCServer){

    /**
     * @name getHotels
     * @desc Listar todos los hoteles
     * @param object filter
     */
    var getHotels = function (filter = {}) {
      return $http({
        method: 'POST',
        headers: {
          'Content-Type': undefined
        },
        url: FCServer.url + 'getHotels',
        params: {
          "name"  : filter.name || "",
          "score" : filter.score || []
        }
      });
    };

    /**
     * [Listado de funciones disponibles]
     * @type {Object}
     */
    return {
      "getHotels": getHotels
    };

  }

})();