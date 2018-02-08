/***************************************************
 * @name Factories
 * @package Angular
 * @author Naycool Gonzalez <naycoolgonzalez@gmail.com>
 *         Developer web
 *
 * Description: Factories
 ****************************************************/

(function () {
  'use strict';

  angular
    .module('app')
    .factory('FCServer', [config])

  function config() {
    var IP = "127.0.0.1:3000";
    return {
      url: `http://${IP}/api/`,
      base: `http://${IP}/`,
      description: 'Configuraciones para comunicarse con el servidor de datos'
    };
  }

}());
