var Plane = require('../../src/plane');

describe('Plane', function() {
  var plane;
  var airportMock;

  beforeEach(function() {
    airportMock = jasmine.createSpy('airport');
    plane = Object.create(Plane);
    plane.init();
    plane.land(airportMock);
  });

  describe('#isFlying', function() {
    it('returns true when the plane is flying', function() {
      plane.takeOff();
      expect(plane.isFlying()).toBe(true);
    });
    it('returns false when the plane is not flying', function() {
      plane.takeOff();
      plane.land(airportMock);
      expect(plane.isFlying()).toBe(false);
    });
  });

  describe('#land', function() {
    it('sets isFlying property of plane to false', function() {
      plane.takeOff();
      plane.land(airportMock);
      expect(plane.isFlying()).toBe(false);
    });
    it('sets airport property of plane to the airport where is landed', function() {
      plane.takeOff();
      plane.land(airportMock);
      expect(plane.airport()).toEqual(airportMock);
    });
    it('throw an error if no airport is passed as argument', function() {
      plane.takeOff();
      var msg = 'You need to specify a valid airport';
      expect( function() { plane.land(); } ).toThrowError(msg);
    });
    it('cannot land when is not flying', function() {
      var msg = 'Unable to land cause is not flying';
      expect( function() { plane.land(airportMock); } ).toThrowError(msg);
    });
  });

  describe('#takeOff', function() {
    it('sets isFlying property of plane to true', function() {
      plane.takeOff();
      expect(plane.isFlying()).toBe(true);
    });
    it('sets airport property of plane to undefined', function() {
      plane.takeOff();
      expect(plane.airport()).toBe(undefined);
    });
    it('cannot take off when is already flying', function() {
      var msg = 'Unable to take off cause is already flying';
      plane.takeOff();
      expect( function() { plane.takeOff(); } ).toThrowError(msg);
    });
  });
});
