var Plane = {
  land: function() {
    if (this.isFlying === false) {
      throw new Error('Unable to land cause is not flying');
    }
    this.isFlying = false;
  },
  takeOff: function() {
    if (this.isFlying === true) {
      throw new Error('Unable to take off cause is already flying');
    }
    this.isFlying = true;
  }
};

module.exports = Plane;
