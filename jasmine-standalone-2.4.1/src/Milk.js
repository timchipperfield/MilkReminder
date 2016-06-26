'use strict';

function Milk() {
  this.Expiry;
  this.Date;
};

Milk.prototype.setExpiryDate = function(year, month, day) {
  this.Expiry = new Date(year, (month - 1), day)
};

Milk.prototype.expiryDate = function() {
  return this.Expiry.toDateString();
};

Milk.prototype.currentDate = function() {
  this.Date = new Date();
  return this.Date;
};
