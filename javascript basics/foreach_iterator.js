//usage
//myForEach(arr, func)

//myForEach(nums, function(num) {
//	console.log(num);
//});

function myForEach(arr, func) {
	arr.forEach(function(num) {
		func(num);
	})
};

//alternatively
function myForEach(arr, func) {
	for (var i=0; i < arr.length; i++)
		func(arr[i]);
};

var nums = [45,65,77,34];
myForEach(nums, function(num) { console.log(num)} );
myForEach(nums, function(num) { alert(num) });

//prototype
Array.prototype.myForEach = function(func) {
	for (var i = 0; i < this.length; i++)
	{
		func(this[i]);
	}
}

var friends = ["Charlie","Liz","David","Mattias"];

friends.myForEach(function(name) { console.log("I love " + name); });