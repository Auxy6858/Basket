let birthDate = new Date("September 3, 2007 03:00:00");
let timeDiff = Math.abs(Date.now() - birthDate.getTime());
let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);