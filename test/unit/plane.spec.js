var Plane = require('../../src/plane');

describe('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = Object.create(Plane);
  });

  describe('#land', function() {
    it('sets isFlying property of plane to false', function() {
      plane.land();
      expect(plane.isFlying).toBe(false);
    });
    it('cannot land when is not flying', function() {
      var msg = 'Unable to land cause is not flying';
      plane.land();
      expect( function() { plane.land(); } ).toThrowError(msg);
    });
  });

  describe('#takeOff', function() {
    it('sets isFlying property of plane to true', function() {
      plane.takeOff();
      expect(plane.isFlying).toBe(true);
    });
    it('cannot take off when is already flying', function() {
      var msg = 'Unable to take off cause is already flying';
      plane.takeOff();
      expect( function() { plane.takeOff(); } ).toThrowError(msg);
    });
  });
});
