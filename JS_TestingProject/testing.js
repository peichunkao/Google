/*var firstName = prompt("Please enter your first name.");
var lastName = prompt("Please enter your last name.");
var age = prompt("Please enter your age.");

alert("User's name is " + firstName + " " + lastName + ".");
alert("User's age is " + age  + " years old.");
//alert("This is an alert message.");
//console.log("This is a testing message.");
*/

const nonStopFlights = [{
  departure: 'Melbourne',
  arrival: 'Beijing' 
}];

const oneStopFlights = [{
  departure: 'Melbourne',
  arrival: 'Guangzhou' 
}, {
  departure: 'Guangzhou',
  arrival: 'Beijing' 
}];

const twoStopsFlights = [{
  departure: 'Melbourne',
  arrival: 'Singapore' 
}, {
  departure: 'Singapore',
  arrival: 'Guangzhou' 
}, {
  departure: 'Guangzhou',
  arrival: 'Beijing'
}];

const threeStopsFlights = [{
  departure: 'Melbourne',
  arrival: 'Sydney' 
}, {
  departure: 'Sydney',
  arrival: 'Singapore'

}, {
  departure: 'Singapore',
  arrival: 'Guangzhou' 
}, {
  departure: 'Guangzhou',
  arrival: 'Beijing'
}];

function getStops1(flights) {
  const stopMap = {
    1:'non-stop',
    2:'1 stop',
    4:'day dream airline'
  }

  var result = stopMap[flights.length] || (flights.length - 1) + " stops";
  console.log(result);
};


function getStops(flights) {
  const stopsMap = {
    1: 'non-stop',
    2: '1 stop',
    4: 'day dream airline'
  };
  
  var result = stopsMap[flights.length] || ((flights.length - 1) + ' stops');
  console.log(result);
};
/*
for(var i = -10; i < 20; i++) {
  console.log(i);
}

var i = 10;
while (i <= 41) {
  if(i % 2 == 0) {
    console.log(i);
  }
  i++;
}

var answer = prompt("Are we there yet?");
while (answer.indexOf("yes") === -1) {
  answer = prompt("Are we there yet?");
} 
  alert("YAY, WE MADE IT!.");
;*/

function isEven(input) {
  return input % 2 === 0;
}

function factorial(input) {
  var result = 1;
  for(var i = 1; i <= input; i++) {
    result = result * i;
  }
  return result;
}

function kebebToSnake(input) {
  var newString = input.replace(/-/g, "_");
  return newString;
}

function sayHi() {
  console.log("hi there");
}

var tax_range = [
  {base: 1, name:1},
  {base: 2, name:2},
];


function myfunction(input) {
  console.log(input.base);
  console.log(input.name);
};

//tax_range.forEach(myfunction);