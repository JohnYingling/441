// Programs for HW2 in the console.

/*
HW-3 Starting to work with JavaScript Proper

Instructions: Please create solutions to the following problems.
You can include all of your answers in the single document.

In order to test your HW, I will simply copy and paste the
entirety of this document into a web console and check that
the correct output occurs.

 */

/**************************************************/
// PROBLEM 1 - "typeof Data Values"
//
// Write 3 statements that return prints the "type of" a value to the console.
// These 3 stataments should print out the 3 basic data types you learned about this week.
// (i.e. `number`, `string`, `boolean`)

//boolean

console.log( typeof 5 );
console.log( typeof "I am John!")
console.log( typeof true );


/**************************************************/
// PROBLEM 2 - Using Loops to Create Pyramids

var number = " ";
for (var i = 0; i < 10; i++) {
number = number+"*"
console.log(number);
}


/**************************************************/
// PROBLEM 2 - FizzBuzz
//
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// For numbers that are divisible by both 3 and 5, the program should print out "FizzBuzz"
// (Your program should still print "Fizz" or "Buzz" for numbers divisible by only one of those).
//
// Your program should output something like the following;
/*
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz

-> etc....

*/

for( let i = 1; i<=100; i++ ) {
    if( i%3==0 && i%5==0 ) {
      console.log( "FizzBuzz");
    } else if( i % 3  == 0) {
      console.log( "Fizz" );
    } else if( i % 5 == 0 ) {
     console.log( "Buzz");
    } else {
      console.log( i );
    }
}








/**************************************************/
// SUBMISSION
//
// When you have finished with this weeks homework, please write a readme response to the week. You should then add this directory into your git repo, sync it, and provide a link to the repo directory (1 link only), to the HW-3 Submission Forum via Moodle.
/**************************************************/
