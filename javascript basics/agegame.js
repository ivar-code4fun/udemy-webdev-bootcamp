var age = prompt("Enter your age");

if (age < 0)
{
	alert("Age cannot be negative!!");
}

if (age % 2 !== 0)
{
	alert("your age is odd!");
}

if (age === 21)
{
	alert("happy 21st birthday");
}

if (age % Math.sqrt(age) === 0)
{
	alert("Congrats! your age is a perfect square!");
}