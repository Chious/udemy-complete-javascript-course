'use strict';

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = { flightNum, numPassengers, price };

  // numPassengers = numPassengers || 1;
  // price = price || 199;

  bookings.push(booking);

  console.log(booking);
};

createBooking('LH123');
