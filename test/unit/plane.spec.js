var Plane = require('../../src/plane');

describe('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = Object.create(Plane);
    plane.init();
  });

  describe('#isFlying', function() {
    it('returns true when the plane is flying', function() {
      plane.takeOff();
      expect(plane.isFlying()).toBe(true);
    });
    it('returns false when the plane is not flying', function() {
      plane.takeOff();
      plane.land();
      expect(plane.isFlying()).toBe(false);
    });
  });

  describe('#land', function() {
    it('sets isFlying property of plane to false', function() {
      plane.takeOff();
      plane.land();
      expect(plane.isFlying()).toBe(false);
    });
    it('cannot land when is not flying', function() {
      var msg = 'Unable to land cause is not flying';
      expect( function() { plane.land(); } ).toThrowError(msg);
    });
  });

  describe('#takeOff', function() {
    it('sets isFlying property of plane to true', function() {
      plane.takeOff();
      expect(plane.isFlying()).toBe(true);
    });
    it('cannot take off when is already flying', function() {
      var msg = 'Unable to take off cause is already flying';
      plane.takeOff();
      expect( function() { plane.takeOff(); } ).toThrowError(msg);
    });
  });
});
