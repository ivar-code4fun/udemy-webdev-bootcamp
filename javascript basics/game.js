var secretNumber = 7;

var guess = prompt("Guess a number between 1 and 10");

if (Number(guess) < secretNumber)
{
	prompt("You guessed " + guess + ". That is too low!");
}
else if (Number(guess) > secretNumber)
{
	prompt("You guessed " + guess + ". That is too high!");
}
else
{
	prompt("You guessed " + guess + " right!!");
}