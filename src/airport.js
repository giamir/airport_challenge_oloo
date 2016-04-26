module.exports = (function () {
  var Airport = {};
  var privateStore = {};
  var uid = 0;
  var DEFAULT_CAPACITY = 20;

  Airport.init = function(opts) {
    opts.capacity = typeof opts.capacity !== 'undefined' ? opts.capacity : DEFAULT_CAPACITY;
    opts.weatherObj = typeof opts.weatherObj !== 'undefined' ? opts.weatherObj : require('./weather');
    privateStore[this.id = uid++] = {};
    privateStore[this.id].capacity = opts.capacity;
    privateStore[this.id].weather = Object.create(opts.weatherObj);
    privateStore[this.id].planes = [];
  };

  Airport.capacity = function() {
    return privateStore[this.id].capacity;
  };

  Airport.planes = function() {
    return privateStore[this.id].planes;
  };

  Airport.land = function(plane) {
    if (isStormy.call(this)) { throw new Error('Unable to land due to stormy weather'); }
    if (isFull.call(this)) { throw new Error('Unable to land cause airport is full'); }
    plane.land();
    addPlane.call(this, plane);
  };

  function addPlane(plane) {
    privateStore[this.id].planes.push(plane);
  }

  function isFull() {
    return privateStore[this.id].planes.length >= privateStore[this.id].capacity;
  }

  function isStormy() {
    return privateStore[this.id].weather.isStormy();
  }

  return Airport;
})();
