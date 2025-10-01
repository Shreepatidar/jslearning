// about dates in javascript

let currDate = new Date();

// console.log(currDate);

// console.log(typeof currDate); // object

// console.log(currDate.toString()); // gives date in string format

// console.log(currDate.toDateString());  // gives only date

// console.log(currDate.toTimeString());  // gives only time

// console.log(currDate.toLocaleString());// gives date and time in local format
// console.log(currDate.toLocaleDateString());    // gives only date in local format

// console.log(currDate.toLocaleTimeString()); // gives only time in local format

// console.log(currDate.getFullYear()); // 4 digit year

// console.log(currDate.getMonth()); // 0-11
// month is 0 based index
//console.log(currDate.getMonth() + 1); // month is 1 based

// console.log(currDate.getDate()); // 1-31

// console.log(currDate.getDay()); // 0-6

// console.log(currDate.getHours());    // 0-23

// console.log(currDate.getMinutes());  // 0-59

// console.log(currDate.getSeconds());  // 0-59

// console.log(currDate.getMilliseconds()); // 0-999

// console.log(currDate.getTime()); // time in milliseconds since 1 jan 1970

// let pastDate = new Date('5-6-2020 11:25:00');    
// console.log(pastDate.toLocaleString());

// let pastDate2 = new Date('September 5 2020');
// console.log(pastDate2.toLocaleString());


// let pastDate3 = new Date("09-05-2020");  // MM-DD-YYYY
// console.log(pastDate3.toLocaleString()); // month is 1 based

// in dd/mm/yyyy format it will not work

// in yyyy/mm/dd format it will work

// let pastDate4 = new Date("2020/09/05 11:25:00");  // YYYY/MM/DD
// console.log(pastDate4.toLocaleString()); // month is 1 based

// let pastDate4 = new Date(2020, 0, 5, 11, 25, 0); // month is 0 based
// console.log(pastDate4.toLocaleString()); // Jan is 0

//timestamp
// console.log(Date.now()); // gives time in milliseconds since 1 jan 1970

// let newDate = new Date();
// console.log(newDate.getTime());

// let newDate1 = new Date(1685667600000);
// console.log(newDate1.toLocaleString());

//to convert timestamp into seconds
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();

console.log(newDate.toString('default', {timeZone: 'Asia/Kolkata'},weekday='long', year='numeric', month='long', day='numeric', hour='numeric', minute='numeric', second='numeric'));
// to convert date to a particular timezone
