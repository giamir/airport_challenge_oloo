module.exports = (function () {
  var Plane = {};
  var privateStore = {};
  var uid = 0;

  Plane.init = function() {
    privateStore[this.id = uid++] = {};
    privateStore[this.id].isFlying = false;
  };

  Plane.isFlying = function() {
    return privateStore[this.id].isFlying;
  };

  Plane.land = function() {
    if (privateStore[this.id].isFlying === false) {
      throw new Error('Unable to land cause is not flying');
    }
    privateStore[this.id].isFlying = false;
  };

  Plane.takeOff = function() {
    if (privateStore[this.id].isFlying === true) {
      throw new Error('Unable to take off cause is already flying');
    }
    privateStore[this.id].isFlying = true;
  };

  return Plane;
})();
