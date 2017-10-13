var person = {			//JSON notation
	name: "Travis",
	age: 21,
	city: "LA"
};

person.age += 1;
person.city = "London";
console.log(person.age);
console.log(person["city"]); // there are some limitations with dot notation

//create an empty object
var person = {};
person.name = "Ravi";
person.age = 40;
person.city = "Seattle";

var person = new Object();
person.name = "Ravi";
person.age = 40;
person.city = "Seattle";

//array of objects
var posts = [
	{
		title: "Cats are mediocre",
		author: "Colt",
		comments: ["Awesome post", "Terrible post"]
	},
	{
		title: "Cats are actually awesome",
		author: "Ravi",
		comments: ["<3", "Go to hell i hate you"]
	}
];

posts.length  //returns 2
posts[0].title
posts[1].comments[1]

//adding methods to objects

var obj = {
	name: "Chuck",
	age: 45,
	isCool: true,
	friends: ["bob", "tina"],
	add: function(x,y) {
		return x+y;
	}
}

obj.add(5,5);  //returns 10

dogSpace = {};
catSpace = {};

dogSpace.speak: function() { return "WOOF!" };
catSpace.speak: function() { return "MEOW!" };

//javascript this 

var comments = {};
comments.data = ["comment 1","comment 2","comments 3"];

function print(arr) {
	arr.forEach(function(el) {
		console.log(el);
	});
};

print(comments.data);

//instead of declaring a standalone print we can attach the print method to the comments object
comments.print = function() {
	this.data.forEach(function(el) {
		console.log(el);
	});
};


