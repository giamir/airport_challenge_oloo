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
     var msg = 'Unable to land or take off due to stormy weather';
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

 describe('#takeOff', function() {
  beforeEach(function() {
    airport.land(planeMock);
  });
  it('instructs the plane to take off', function() {
    airport.takeOff(planeMock);
    expect(planeMock.takeOff).toHaveBeenCalled();
  });
  it('does not have the plane after it took off', function() {
    airport.takeOff(planeMock);
    expect(airport.planes()).not.toContain(planeMock);
  });
  it('does not allow the plane to take off when weather is stormy', function() {
    weatherObjMock.isStormy.and.returnValue(true);
    var msg = 'Unable to land or take off due to stormy weather';
    expect( function(){ airport.takeOff(planeMock); } ).toThrowError(msg);
  });
  it('can not instructs a plane to take off if it is not in the airport', function() {
    var msg = 'Unable to instruct plane to take off cause is not in the airport';
    airport.takeOff(planeMock);
    expect( function(){ airport.takeOff(planeMock); } ).toThrowError(msg);
  });
});
});
