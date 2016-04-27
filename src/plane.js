module.exports = (function () {
  var Plane = {};
  var privateStore = {};
  var uid = 0;
  var ERR_MSGS = {
    notValidAirport: 'You need to specify a valid airport',
    unableToLand: 'Unable to land cause is not flying',
    unableToTakeOff: 'Unable to take off cause is already flying'
  };

  Plane.init = function(airport) {
    if (typeof airport === 'undefined') { throw new Error(ERR_MSGS.notValidAirport); }
    privateStore[this.id = uid++] = {};
    privateStore[this.id].isFlying = false;
    privateStore[this.id].airport = airport;
  };

  Plane.isFlying = function() {
    return privateStore[this.id].isFlying;
  };

  Plane.airport = function() {
    return privateStore[this.id].airport;
  };

  Plane.land = function(airport) {
    if (typeof airport === 'undefined') { throw new Error(ERR_MSGS.notValidAirport); }
    if (!this.isFlying()) { throw new Error(ERR_MSGS.unableToLand); }
    privateStore[this.id].isFlying = false;
    privateStore[this.id].airport = airport;
  };

  Plane.takeOff = function() {
    if (this.isFlying()) { throw new Error(ERR_MSGS.unableToTakeOff); }
    privateStore[this.id].isFlying = true;
    privateStore[this.id].airport = undefined;
  };

  return Plane;
})();
