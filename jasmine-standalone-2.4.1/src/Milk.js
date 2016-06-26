'use strict';

function Milk() {
  this.Expiry;
  this.dateC;
};

Milk.prototype.setExpiryDate = function(year, month, day) {
  this.Expiry = new Date(year, (month - 1), day)
};

Milk.prototype.expiryDate = function() {
  return this.Expiry;
};

Milk.prototype.currentDate = function() {
  this.dateC = new Date();
  return this.dateC;
};

Milk.prototype.daysLeft = function() {
  var diff =  (this.expiryDate() - this.currentDate());
  return Math.floor(diff / 10000 / 60 / 60 / 24);
};

Milk.prototype.prettyPrint = function(aDate) {
  var prettyDate = aDate.toDateString();
  return prettyDate;
};

Milk.prototype.checkMilk = function() {
    if(this.daysLeft() === 1) {
      return 'The Milk is almost bad';
    } else if(this.daysLeft() > 1) {
      return 'Your Milk is fine';
    } else { return 'The Milk\'s gone bad!';
  };
};
