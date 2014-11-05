// You are given the following information, but you may prefer to do some research for yourself.
//
// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?


var SHIFTS = [
  [31],
  [29, 28, 28, 28],
  [31],
  [30],
  [31],
  [30],
  [31],
  [31],
  [30],
  [31],
  [30],
  [31]
];

// sunday == 0, Jan 1 1901 is a Tuesday
var dayOfTheWeek = 2;
var firstDaySundays = 0;

var month = 0;
var year = 1;

for (var year = 1; year <= 100; year++) {
  for (var month = 0; month < 12; month++) {
    if (dayOfTheWeek === 0) firstDaySundays++;
    var yearIndex = year % SHIFTS[month].length;
    var daysThisMonth = SHIFTS[month][yearIndex];
    // no leap years on even centuries
    if (daysThisMonth === 29 && year % 100 === 0) daysThisMonth = 29;

    dayOfTheWeek = (dayOfTheWeek + daysThisMonth) % 7;
  }
}


console.error('Sundays that fell on the first of the month:', firstDaySundays);
