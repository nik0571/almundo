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
  .directive('hotelCard', [hotelCard])


  // Main Header
  function mainHeader () {
    return {
      restric: "EA",
      replace: true,
      templateUrl: "views/layout/header.html" + vApp
    };
  }

  //Tarjeta de hotel
  function hotelCard () {
    return {
      restric: "EA",
      replace: true,
      templateUrl: "views/directives/hotel-card.html" + vApp,
      scope: {
        hotel: "="
      },
      link: function (scope, element, attrs) {
        angular.element(".row.image", element).css({
          "background-image": "url(images/hotels/"+scope.hotel.image+"), url(images/image-not-found.jpg)"
        });
      }
    };
  }

})();
