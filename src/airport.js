module.exports = (function () {
  var Airport = {};
  var privateStore = {};
  var uid = 0;
  var DEFAULT_CAPACITY = 20;
  var ERR_MSGS = {
    stormy: 'Unable to land or take off due to stormy weather',
    airportFull: 'Unable to land cause airport is full',
    planeNotPresent: 'Unable to instruct plane to take off cause is not in the airport'
  };

  Airport.init = function(opts) {
    opts = typeof opts !== 'undefined' ? opts : {};
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
    if (isStormy.call(this)) { throw new Error(ERR_MSGS.stormy); }
    if (isFull.call(this)) { throw new Error(ERR_MSGS.airportFull); }
    plane.land(this);
    addPlane.call(this, plane);
  };

  Airport.takeOff = function(plane) {
    if (isStormy.call(this)) { throw new Error(ERR_MSGS.stormy); }
    if (planeIndex.call(this, plane) === -1) { throw new Error(ERR_MSGS.planeNotPresent); }
    plane.takeOff();
    removePlane.call(this, plane);
  };

  function addPlane(plane) {
    privateStore[this.id].planes.push(plane);
  }

  function removePlane(plane) {
    privateStore[this.id].planes.splice(planeIndex.call(this, plane), 1);
  }

  function isFull() {
    return privateStore[this.id].planes.length >= privateStore[this.id].capacity;
  }

  function isStormy() {
    return privateStore[this.id].weather.isStormy();
  }

  function planeIndex(plane) {
    return privateStore[this.id].planes.indexOf(plane);
  }

  return Airport;
})();
