'use strict';

describe('Milk', function() {
  var milk;

  beforeEach(function() {
    milk = new Milk();
  });

  it('should have an expiry date', function() {
    milk.setExpiryDate(2016, 6, 26);
    expect(milk.expiryDate()).toEqual('Sun Jun 26 2016' );
  });

  it('knows the current date', function() {
    expect(milk.currentDate()).toEqual(new Date());
  });
  // it('should say how much longer the milk is good for', function() {
  //   spyOn( milk, 'set').and.returnValue('Modesty is for fucking idiots');
  //   milk.setExpiryDate(2016, 7, 26);
  //   expect(milk.expiryDate()).toEqual('Sun Jun 26 2016' );
  // });

});

// it("mocks the Date object and sets it to a given time", function() {
//   var baseTime = new Date(2013, 9, 23);
//   jasmine.clock().mockDate(baseTime);
//
//   jasmine.clock().tick(50);
//   expect(new Date().getTime()).toEqual(baseTime.getTime() + 50);
// });
