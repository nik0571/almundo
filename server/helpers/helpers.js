/***************************************************
 * @name Helpers
 * @package Helper
 * @author Naycool Gonzalez <naycoolgonzalez@gmail.com>
 * @description: Funciones ayudantes
 ****************************************************/

/**
 * @name slugify
 * @description Normalizar cadena
 * @param  string str
 * @return String
 */
var slugify = (function() {
  var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç",
    to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
    mapping = {};

  for (var i = 0, j = from.length; i < j; i++)
    mapping[from.charAt(i)] = to.charAt(i);

  return function(str) {
    var ret = [];
    for (var i = 0, j = str.length; i < j; i++) {
      var c = str.charAt(i);
      if (mapping.hasOwnProperty(str.charAt(i)))
        ret.push(mapping[c]);
      else
        ret.push(c);
    }
    return ret.join('')
      .toLowerCase();
  };

})();

/**
 * Verificar datos nulos o indefindos
 * @param  {Array} array [Datos a verificar]
 * @return {bollean}
 */
var emptyDatas = function(array = []) {
  if(array.length === 0)
    return false;

  for (var i = 0, j = array.length; i < j; i++) {
    if (array[i] === undefined || array[i] === "" || array[i] === null)
      return false;
  }
  return true;
};


module.exports = {
  "slugify": slugify,
  "emptyDatas": emptyDatas
};
