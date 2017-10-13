var numbers = [1,2,3,4,5];

function printReverse(nums) {
	for (var i = nums.length-1; i >= 0; i--) {
		console.log(nums[i]);
	}
}

printReverse(["a","b","c"]);

function isUniform(nums) {
	var input = nums[0];
	for (var i = 1; i < nums.length; i++) {
		if (nums[i] !== input)
			break;
	}
	if (i === nums.length)
		return true;
	else
		return false;
}

function sumArray(nums) {
	var total = 0;
	nums.forEach(function(num) {
		total += num;
	});
	return total;
}

sumArray([10,3,10,4]);
sumArray([-25,100,50,-60]);

function max(nums) {
	var max = 0;
	nums.forEach(function(num) {
		if (num > max)
			max = num;
	});
	return max;
}