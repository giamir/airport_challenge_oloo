module.exports = (function () {
  var Airport = {};
  var privateStore = {};
  var uid = 0;
  var DEFAULT_CAPACITY = 20;

  Airport.init = function(capacity) {
    capacity = typeof capacity !== 'undefined' ? capacity : DEFAULT_CAPACITY;
    privateStore[this.id = uid++] = {};
    privateStore[this.id].capacity = capacity;
  };

  Airport.capacity = function() {
    return privateStore[this.id].capacity;
  };

  return Airport;
})();
