var friends = ["Charlie","Liz","David","Mattias"];

console.log(friends[0]);
friends[0] = "Chuck"; //modify array
friends[4] = "Amelie" //add a new element on the fly

var friends = []; //initialize an empty array
var friends = new Array(); // uncommon but still possible to initialize this way

var objects = [49, true, "Hermoine", null];
var nums = [12,35,67,9,11];
console.log(nums.length);

var colors = ["red","green","blue"];
colors.push("violet");
colors.push("indigo");

var color = colors.pop(); // pop returns the last element, indigo

colors.unshift("infrared"); // unshift add the element to start of array
colors.shift(); // shift removes the element from start of the array

var friends = ["Ravi","Anand","Sathya","Raghu"];
friends.indexOf("Anand"); // will return 1 as this is the first position of that element
friends.indexOf("Raj"); //will return -1 if the element does not exist

var fruits = ["Banana","Orange","Lemon","Apple","Mango"];
var citrus = fruits.slice(1, 3);  //does not alter the original array, this returns orange and Lemon

//for loops
var colors = ["red", "orange", "yellow", "green"];

//for syntax
for (var i = 0; i < colors.length; i++) 
{
	console.log(colors[i]);
}

//foreach syntax
colors.forEach(function(color) {
	console.log(color);
});

//alternatively we can do function callbacks
function printColor(color) {
  console.log("*************************");
  console.log(color);
  console.log("*************************");
}

colors.forEach(printColor);
