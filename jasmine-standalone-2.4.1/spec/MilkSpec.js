'use strict';

describe('Milk', function() {
  var milk;
  var date;

  beforeEach(function() {
    milk = new Milk();
    // date = new Date(2016, 7, 25);
  });

  it('should have an nicely printed expiry date', function() {
    milk.setExpiryDate(2016, 7, 28);
    expect(milk.prettyPrint(milk.expiryDate())).toEqual('Thu Jul 28 2016');
  });

  it('knows the current date', function() {
    expect(milk.currentDate().toDateString()).toEqual(new Date().toDateString());
  });

  it('should say how much longer the milk is good for', function() {
    spyOn( milk, 'currentDate' ).and.returnValue(new Date(2016, 5, 26));
    milk.setExpiryDate(2016, 7, 28);
    expect(milk.daysLeft()).toEqual(3);
  });

  it('says when the milk has gone bad', function() {
    spyOn( milk, 'daysLeft' ).and.returnValue(-1);
    expect(milk.checkMilk()).toEqual('The Milk\'s gone bad!');
  });

});
