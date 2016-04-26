var Airport = require('../../src/airport');

describe('Airport', function() {
  var airport;
  var planeMock;
  var weatherObjMock;

  beforeEach(function() {
    planeMock = jasmine.createSpyObj('plane', ['land', 'takeOff']);
    weatherObjMock = jasmine.createSpyObj('weatherObj', ['isStormy']);
    airport = Object.create(Airport);
    airport.init({ weatherObj: weatherObjMock });
  });

  describe('#init', function() {
    it('initialize airport with default capacity if not specified', function() {
      expect(airport.capacity()).toEqual(20); // retrieve constant from airport closure is not possible
    });
    it('initialize airport with a specified capacity', function() {
      var airportAux = Object.create(Airport);
      airportAux.init({ capacity: 10 });
      expect(airportAux.capacity()).toEqual(10);
    });
  });

  describe('#land', function() {
   it('instructs the plane to land', function() {
     airport.land(planeMock);
     expect(planeMock.land).toHaveBeenCalled();
   });
   it('has the plane after it has landed', function() {
     airport.land(planeMock);
     expect(airport.planes()).toContain(planeMock);
   });
   it('does not allow the plane to land when weather is stormy', function() {
     weatherObjMock.isStormy.and.returnValue(true);
     var msg = 'Unable to land due to stormy weather';
     expect( function(){ airport.land(planeMock); } ).toThrowError(msg);
   });
   it('does not allow the plane to land when airport is full', function() {
     for (var i = 0; i < airport.capacity(); i++) {
       airport.land(planeMock);
     }
     var msg = 'Unable to land cause airport is full';
     expect( function(){ airport.land(planeMock); } ).toThrowError(msg);
   });
 });
});
