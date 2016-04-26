var Airport = require('../../src/airport');

describe('Airport', function() {
  var airport;

  beforeEach(function() {
    airport = Object.create(Airport)
    airport.init();
  });

  describe('#init', function() {
    it('initialize airport with default capacity if not specified', function() {
      expect(airport.capacity()).toEqual(20); // retrieve constant from airport closure is not possible
    });
    it('initialize airport with a specified capacity', function() {
      var airportAux = Object.create(Airport)
      airportAux.init(10);
      expect(airportAux.capacity()).toEqual(10);
    });
  });
});
