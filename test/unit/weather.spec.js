var Weather = require('../../src/weather');

describe('Weather', function() {
  var weather;

  beforeEach(function() {
    weather = Object.create(Weather);
  });

  describe('#isStormy', function() {
    describe('when Math.random() return a value greater than 0.33', function() {
      it('returns false', function() {
        spyOn(Math, 'random').and.returnValue(0.9);
        expect(weather.isStormy()).toBe(false);
      });
    });
    describe('when Math.random() return a value less than 0.33', function() {
      it('returns true', function() {
        spyOn(Math, 'random').and.returnValue(0.1);
        expect(weather.isStormy()).toBe(true);
      });
    });
  });
});
