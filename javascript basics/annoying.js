
var response = "no";
// while (response !== "yes" && response !== "yeah")
// {
// 	response = prompt("Are we there yet?");
// 	response = response.toLowerCase();

// }

while (response.indexOf("yes") === -1 && response.indexOf("yeah") === -1)
{
	response = prompt("Are we there yet?");
	response = response.toLowerCase();
}


alert("Yay! we finally made it!");