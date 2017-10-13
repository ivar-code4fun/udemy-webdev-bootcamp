
function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function factorial(num) {
	var result = 1;
	if (num === 0)
		return result;
	else
	{
		for (var i = num; i > 0; i--)
		{
			result *= i;
		}
		return result;
	}
}

function kebabToSnake(str) {
	return str.replace(/-/g,"_");
}

function singSong() {
	console.log("Twinkle twinkle little star ...");
	console.log("How i wonder what ...");
};

setInterval(singSong, 1000);

setInterval(function() {
	console.log("I am an anonymous function!");
}, 1000);