/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('ball player', 'spain', 'Shaq', 3);
=> "You will be a ball player in spain, and married to Shaq with 3 kids."
*/


/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/


/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/


/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Jouza")
=> "Hello Jouza"
*/


/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/



/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/


/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
*/

function multipy(num1, num2) {
	var multiplication = num1 * num2;
	return multiplication;
}





/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

*/


function canIGetADrivingLicense(age) {
	if(age >= 20) {
		return 'yes';
	} 

	var x = 20 - age;
	return 'please come back after ' + x + ' years to get one.';
}




/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(str1, str2) {
	if (str1.length === str2.length)
		return true;
	else 
		return false;
}







/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(num1, num2) {
	if (num1 > num2)
		return num1;
	return num2;
}








/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5
*/


function smallerNubmer(num1, num2, num3) {
	var minNum = num1;
	if(num2 < minNum)
		minNum = num2;
	if(num3 < minNum)
		minNum = num3;

	return minNum;
}







/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by
*/

function shorterString(str1, str2, str3, str4, str5){
	var shorterStr = str1;

	if(shorterStr.length > str2.length)
		shorterStr = str2;

	if(shorterStr.length > str3.length)
		shorterStr = str3;
	
	if(shorterStr.length > str4.length)
		shorterStr = str4;
	
	if(shorterStr.length > str5.length)
		shorterStr = str5;
	
	return shorterStr;
}









/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: shorterString("air","school","car","github")
=> school
*/

function longerString(str1, str2, str3, str4){
	var longerStr = str1;

	if(longerStr.length < str2.length)
		longerStr = str2;

	if(longerStr.length < str3.length)
		longerStr = str3;
	
	if(longerStr.length < str4.length)
		longerStr = str4;
	
	
	return longerStr;
}









/*


*/

/*


*/

/*


*/

/*


*/

/*


*/

/*


*/