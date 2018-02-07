/**
 * @name Directives
 * @package Angular
 * @author Naycool Gonzalez <naycoolgonzalez@gmail.com>
 * @description Directivas globales
 */

(function () {
  'use strict';

  angular
  .module('app')
  .directive('mainHeader', [mainHeader])


  // Main Header
  function mainHeader () {
    return {
      restric: "EA",
      replace: true,
      templateUrl: "views/layout/header.html" + vApp
    };
  }

})();
