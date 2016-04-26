module.exports = (function () {
  var Weather = {};

  Weather.isStormy = function() {
    return (Math.floor(Math.random() * 3) === 0);
  };

  return Weather;
})();
